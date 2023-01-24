import create from 'zustand';

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

export const useAuthErrorStore = create<FirebaseAuthErrorState>()((set) => ({
  ...initialState,
  setError: ({ errorMessage, errorCode }) => set(() => ({ error: { errorMessage, errorCode } })),

  reset: () => {
    set(initialState);
  },
}));
