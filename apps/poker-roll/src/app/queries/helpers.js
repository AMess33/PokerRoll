import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';


export function useSessions() {
  return useQuery({ queryKey: ['sessions'], queryFn: () => {
    return fetch('http://localhost:3333/api/session').then( (res) => res.json(),)
  } });
}

export function useBankroll() {
  return useQuery({ queryKey: ['bankroll'], queryFn: () => {
    return fetch('http://localhost:3333/api/bankroll').then( (res) => res.json(),)
  }});
}

export function useCreateSession() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formState) => {
      console.log(formState);
        return fetch('http://localhost:3333/api/session', {method: 'POST', body: JSON.stringify(formState),  headers: {
          "Content-Type": "application/json",} })
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


export function useCreateBankroll() {
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

  return useMutation({
    mutationFn: (formState) => {
      console.log(formState);
      return fetch('http://localhost:3333/api/bankroll', {method: "PUT", body: JSON.stringify(formState), headers: { "Content-Type": "application/json",}})
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bankroll'] });
    },
  });
}
