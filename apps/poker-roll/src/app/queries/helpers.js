import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';


export function useUser() {
  return useQuery({ queryKey: ['user'], queryFn: () => {
    return fetch('http://localhost:3333/user').then( (res) => res.json(),);
  } });
}

export function useSessions() {
  return useQuery({ queryKey: ['sessions'], queryFn: () => {
    return fetch('http://localhost:3333/user/session').then( (res) => res.json(),)
  } });
}
export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formState) => {
      console.log(formState);
      return fetch('http://localhost3333/api/user', {method: 'POST', body: JSON.stringify(formState), headers: { "Content-Type": "application/json",} })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    }
  })
}
export function useCreateSession() {
  const queryClient = useQueryClient();


  return useMutation({
    mutationFn: (formState) => {
      console.log(formState);
        return fetch('http://localhost:3333/api/user/session', {method: 'POST', body: JSON.stringify(formState),  headers: {
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
    mutationFn: updateSession,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sessions'] });
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
}

export function useUpdateBankroll() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBankroll,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
}
