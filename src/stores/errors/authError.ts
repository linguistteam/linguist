import create from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface FirebaseAuthError {
  error: string;
}

export interface FirebaseAuthErrorState {
  error: string;
  setError: ({ error }: FirebaseAuthError) => void;
  reset: () => void;
}

const initialState = {
  error: '',
};

export const useAuthErrorStore = create<FirebaseAuthErrorState>()(
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
