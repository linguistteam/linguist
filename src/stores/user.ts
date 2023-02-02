import create from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface User {
  displayName: string | null;
  email: string | null;
  photoURL: string;
  uid: string;
}

export interface UserState {
  user: User;
  setUser: ({ displayName, email, photoURL, uid }: User) => void;
  reset: () => void;
}

const initialState = {
  user: { displayName: '', email: '', photoURL: '', uid: '' },
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialState,
      setUser: ({ displayName, email, photoURL, uid }) =>
        set(() => ({ user: { displayName, email, photoURL, uid } })),

      reset: () => {
        set(initialState);
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
