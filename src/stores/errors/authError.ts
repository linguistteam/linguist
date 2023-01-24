import create from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AuthError {
  error: string;
}

export interface AuthErrorState {
  error: string;
  setError: ({ error }: AuthError) => void;
  reset: () => void;
}

const initialState = {
  error: '',
};

export const useAuthErrorStore = create<AuthErrorState>()(
  persist(
    (set) => ({
      ...initialState,
      setError: ({ error }) => set(() => ({ error })),

      reset: () => {
        set(initialState);
      },
    }),
    {
      name: 'auth-error-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
