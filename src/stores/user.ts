import create from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface User {
  displayName: string | null;
  email: string | null;
  uid: string;
}

export interface UserState {
  user: User;
  setUser: ({ displayName, email, uid }: User) => void;
  reset: () => void;
}

const initialState = {
  user: { displayName: '', email: '', uid: '' },
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialState,
      setUser: ({ displayName, email, uid }) => set(() => ({ user: { displayName, email, uid } })),

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
