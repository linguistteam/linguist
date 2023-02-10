import create from 'zustand';

export interface FirebaseError {
  errorMessage: string;
  errorCode: string;
}

export interface FirebaseErrorState {
  error: FirebaseError;
  setError: ({ errorMessage, errorCode }: FirebaseError) => void;
  reset: () => void;
}

const initialState = {
  error: { errorMessage: '', errorCode: '' },
};

export const useFirebaseErrorStore = create<FirebaseErrorState>()((set) => ({
  ...initialState,
  setError: ({ errorMessage, errorCode }) => set(() => ({ error: { errorMessage, errorCode } })),

  reset: () => {
    set(initialState);
  },
}));
