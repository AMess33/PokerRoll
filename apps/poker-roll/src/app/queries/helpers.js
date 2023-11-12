import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useUser } from '@clerk/clerk-react';
const NX_BASEURL =
  process.env.NX_TASK_TARGET_CONFIGURATION === 'development'
    ? 'http://localhost:3333/api'
    : 'https://pokerroll.fly.dev/api';
// use dayjs library for currentDateStamp and timeStamp functions
export function useSessions() {
  const user = useUser();
  return useQuery({
    queryKey: ['sessions', user.user.id],
    queryFn: () => {
      return fetch(NX_BASEURL + `/session?id=${user.user.id}`).then((res) =>
        res.json()
      );
    },
  });
}

export function useGetAllSessions() {
  const user = useUser();
  return useQuery({
    queryKey: ['sessions', 'all', user.user.id],
    queryFn: () => {
      return fetch(NX_BASEURL + `/allsessions?id=${user.user.id}`).then((res) =>
        res.json()
      );
    },
  });
}

export function useBankroll() {
  const user = useUser();

  return useQuery({
    queryKey: ['bankroll', user.user.id],
    queryFn: () => {
      return fetch(NX_BASEURL + `/bankroll?id=${user.user.id}`).then((res) =>
        res.json()
      );
    },
  });
}

export function useGetAllBankroll() {
  const user = useUser();

  return useQuery({
    queryKey: ['bankroll', 'all', user.user.id],
    queryFn: () => {
      return fetch(NX_BASEURL + `/allbankroll?id=${user.user.id}`).then((res) =>
        res.json()
      );
    },
  });
}

export function useCreateSession() {
  const queryClient = useQueryClient();
  const user = useUser();

  return useMutation({
    mutationFn: (formState) => {
      return fetch(NX_BASEURL + '/session', {
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
      return fetch(NX_BASEURL + '/session', {
        method: 'PUT',
        body: JSON.stringify(formState),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sessions'] });
      queryClient.invalidateQueries({ queryKey: ['bankroll'] });
    },
  });
}

export function useGetBankroll() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formState) => {
      return fetch(NX_BASEURL + '/bankroll', {
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
      return fetch(NX_BASEURL + '/bankroll', {
        method: 'POST',
        body: JSON.stringify({ ...formState, id: user.user.id }),
        headers: { 'Content-Type': 'application/json' },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bankroll'] });
    },
  });
}
