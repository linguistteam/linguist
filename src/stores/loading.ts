import create from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Loading {
  isLoading: boolean;
}

export interface LoadingState {
  isLoading: boolean;
  setLoading: ({ isLoading }: Loading) => void;
}

const initialState = {
  isLoading: false,
};

export const useLoadingStore = create<LoadingState>()(
  persist(
    (set) => ({
      ...initialState,
      setLoading: ({ isLoading }) => set(() => ({ isLoading })),
    }),
    {
      name: 'loading-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
