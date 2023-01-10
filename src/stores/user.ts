import create from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  email: string;
}

export interface UserState {
  user: User;
  setUser: (email: string) => void;
}

const initialState = {
  user: { email: '' },
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialState,
      setUser: (email) => set(() => ({ user: { email } })),

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
