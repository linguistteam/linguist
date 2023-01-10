import create from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  email: string;
}

interface UserState {
  user: User;
}

const initialState: UserState = {
  user: { email: '' },
};

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialState,
      setUser: (email: string) => set(() => ({ user: { email } })),

      reset: () => {
        set(initialState);
      },
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useUserStore;
