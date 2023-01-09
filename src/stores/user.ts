import create from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  email: string;
}

interface UserState {
  user: User;
}

const initialState: UserState = {
  user: { email: '' },
};

const useUserStore = create<UserState>()((set) => ({
  ...initialState,
  setUser: (email: string) => set(() => ({ user: { email: email } })),

  reset: () => {
    set(initialState);
  },
}));

// interface BearState {
//   bears: number;
//   increase: (by: number) => void;
// }

// const useBearStore = create<BearState>()(
//   persist((set) => ({
//     bears: 0,
//     increase: (by) => set((state) => ({ bears: state.bears + by })),
//   })),
// );

export default useUserStore;
