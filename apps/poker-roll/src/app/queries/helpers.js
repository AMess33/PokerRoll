import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useUser } from "@clerk/clerk-react";

// set up a date.now function to be used in start time and end time and displayed as intended on app
export function timeStamp() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
  const day = currentDate.getDate().toString().padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}
export function useSessions() {
  const user = useUser();
  return useQuery({ queryKey: ['sessions', user.user.id], queryFn: () => {
    return fetch(`http://localhost:3333/api/session?id=${user.user.id}`).then( (res) => res.json(),)
  } });
}

export function useGetAllSessions() {
  const user = useUser();
  return useQuery({ queryKey: ['sessions', 'all', user.user.id], queryFn: () => {
    return fetch(`http://localhost:3333/api/allsessions?id=${user.user.id}`).then( (res) => res.json(),)
  }})
}

export function useBankroll() {
  const user = useUser();

  return useQuery({ queryKey: ['bankroll', user.user.id], queryFn: () => {
    return fetch(`http://localhost:3333/api/bankroll?id=${user.user.id}`).then( (res) => res.json(),)
  }});
}

export function useGetAllBankroll() {
  const user = useUser();

  return useQuery({ queryKey: ['bankroll', 'all', user.user.id], queryFn: () => {
    return fetch(`http://localhost:3333/api/allbankroll?id=${user.user.id}`).then( (res) => res.json(),)
  }})
}

export function useCreateSession() {
  const queryClient = useQueryClient();
  const user = useUser();

  return useMutation({
    mutationFn: (formState) => {
      console.log(formState);
        return fetch('http://localhost:3333/api/session', {method: "POST", body: JSON.stringify({...formState, userID: user.user.id}), headers: { "Content-Type": "application/json",}})
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
      return fetch('http://localhost:3333/api/session', {method: 'PUT', body: JSON.stringify(formState), headers: {
        "Content-Type": "application/json",
      }})
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
        return fetch('http://localhost:3333/api/bankroll', {method: 'POST', body: JSON.stringify(formState),  headers: {
          "Content-Type": "application/json",} })
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
      return fetch('http://localhost:3333/api/bankroll', {method: "POST", body: JSON.stringify({...formState, userID: user.user.id}), headers: { "Content-Type": "application/json",}})
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bankroll'] });
    },
  });
}

