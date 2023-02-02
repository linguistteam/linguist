import { auth } from '../../firebaseConfig';
import { User } from '@stores/user';

/* Handle checking if user is logged in */
/* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/start */

interface HandleCheckLoggedInStateProps {
  setUser: ({ displayName, email, uid }: User) => void;
  resetUser: () => void;
  isLoading: boolean;
}

const handleCheckLoggedInState = ({
  setUser,
  resetUser,
  isLoading,
}: HandleCheckLoggedInStateProps) => {
  auth.onAuthStateChanged((user) => {
    if (user && !isLoading) {
      // TODO: If no !email, throw error
      // User is logged in
      const { displayName, email, uid } = user;

      setUser({ displayName, email, uid });

      console.log({ user });

      console.info('user is logged in');
    } else {
      // User is logged out
      resetUser();

      console.info('user is logged out');
    }
  });
};

export default handleCheckLoggedInState;
