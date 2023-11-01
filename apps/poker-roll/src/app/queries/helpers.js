import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useUser } from '@clerk/clerk-react';

// use dayjs library for currentDateStamp and timeStamp functions
const dayjs = require('dayjs');

// set up a date.now function to be used in start time and end time and displayed as intended on app
export function currentDateStamp() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');

  // return as string and stored in database as startTime and endTime

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

export function timeStamp() {
  const currentDate = new Date();
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');

  // return as number so duration can be calculated in hours w/ decimals 1.5 hrs
  return `${hours}:${minutes}`;
}

export function useSessions() {
  const user = useUser();
  return useQuery({
    queryKey: ['sessions', user.user.id],
    queryFn: () => {
      return fetch(`http://localhost:3333/api/session?id=${user.user.id}`).then(
        (res) => res.json()
      );
    },
  });
}

export function useGetAllSessions() {
  const user = useUser();
  return useQuery({
    queryKey: ['sessions', 'all', user.user.id],
    queryFn: () => {
      return fetch(
        `http://localhost:3333/api/allsessions?id=${user.user.id}`
      ).then((res) => res.json());
    },
  });
}

export function useBankroll() {
  const user = useUser();

  return useQuery({
    queryKey: ['bankroll', user.user.id],
    queryFn: () => {
      return fetch(
        `http://localhost:3333/api/bankroll?id=${user.user.id}`
      ).then((res) => res.json());
    },
  });
}

export function useGetAllBankroll() {
  const user = useUser();

  return useQuery({
    queryKey: ['bankroll', 'all', user.user.id],
    queryFn: () => {
      return fetch(
        `http://localhost:3333/api/allbankroll?id=${user.user.id}`
      ).then((res) => res.json());
    },
  });
}

export function useCreateSession() {
  const queryClient = useQueryClient();
  const user = useUser();

  return useMutation({
    mutationFn: (formState) => {
      console.log(formState);
      return fetch('http://localhost:3333/api/session', {
        method: 'POST',
        body: JSON.stringify({ ...formState, userID: user.user.id }),
        headers: { 'Content-Type': 'application/json' },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sessions'] });
    },
  });
}

export function useUpdateSession() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formState) => {
      console.log(formState);
      return fetch('http://localhost:3333/api/session', {
        method: 'PUT',
        body: JSON.stringify(formState),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sessions'] });
    },
  });
}

export function useGetBankroll() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formState) => {
      console.log(formState);
      return fetch('http://localhost:3333/api/bankroll', {
        method: 'POST',
        body: JSON.stringify(formState),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bankroll'] });
    },
  });
}

export function useUpdateBankroll() {
  const queryClient = useQueryClient();
  const user = useUser();

  return useMutation({
    mutationFn: (formState) => {
      console.log(formState);
      return fetch('http://localhost:3333/api/bankroll', {
        method: 'POST',
        body: JSON.stringify({ ...formState, userID: user.user.id }),
        headers: { 'Content-Type': 'application/json' },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bankroll'] });
    },
  });
}
