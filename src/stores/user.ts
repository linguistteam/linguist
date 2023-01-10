import create from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface User {
  email: string;
  uid: string;
}

export interface UserState {
  user: User;
  setUser: ({ email, uid }: User) => void;
}

const initialState = {
  user: { email: '', uid: '' },
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialState,
      setUser: ({ email, uid }) => set(() => ({ user: { email, uid } })),

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
