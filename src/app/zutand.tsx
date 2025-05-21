// src/store/useReceitaStore.ts
import { create } from 'zustand';
import { Receitas } from '@/src/app/models/Receitas';

type Store = {
  object?: any;
  setObject: (r: any) => void;
};

export const useObjectStore = create<Store>((set) => ({
  object: undefined,
  setObject: (r) => set({ object: r }),
}));
