// src/hooks/useReceitas.ts
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteById, getAll, getById, saveAll } from '../services/recipeService';
import type { AxiosResponse } from 'axios';
import { Receitas } from '../models/Receitas';

export const useReceitas = () => {
  return useQuery({
    queryKey: ['receitas'],
    queryFn: getAll,
    // staleTime: 1000 * 60 * 5,
  });
};


export const useReceitaById = (id: number) => {
  return useQuery({
    queryKey: ['receita', id],
    queryFn: () => getById(id),
    enabled: !!id, // só executa quando id for válido
  });
};

export const useReceitaDeleteById = (id: number) => {
  return useQuery({
    queryKey: ['receita', id],
    queryFn: () => deleteById(id),
    enabled: !!id, 
  });
};



export const useSaveReceita = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: any) => saveAll(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['receitas'] });
    },
  });
};

export const useDeleteReceita = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['receitas'] });
    },
  });
};


