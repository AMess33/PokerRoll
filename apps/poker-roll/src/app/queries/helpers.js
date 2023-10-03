import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getUser,
  getSessions,
  createSession,
  updateSession,
  deleteUser,
  updateBankroll,
} from '../my-api';

export function useUser() {
  return useQuery({ queryKey: ['user'], queryFn: getUser });
}

export function useSessions() {
  return useQuery({ queryKey: ['sessions'], queryFn: getSessions });
}

export function useCreateSession() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createSession,
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
