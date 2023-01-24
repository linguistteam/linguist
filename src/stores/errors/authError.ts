import create from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface FirebaseAuthError {
  errorMessage: string;
  errorCode: string;
}

export interface FirebaseAuthErrorState {
  error: FirebaseAuthError;
  setError: ({ errorMessage, errorCode }: FirebaseAuthError) => void;
  reset: () => void;
}

const initialState = {
  error: { errorMessage: '', errorCode: '' },
};

export const useAuthErrorStore = create<FirebaseAuthErrorState>()(
  persist(
    (set) => ({
      ...initialState,
      setError: ({ errorMessage, errorCode }) =>
        set(() => ({ error: { errorMessage, errorCode } })),

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
