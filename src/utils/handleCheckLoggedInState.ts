import { auth } from '../../firebaseConfig';
import { User } from '@stores/user';

/* Handle checking if user is logged in */
/* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/start */

interface HandleCheckLoggedInStateProps {
  setUser: ({ email, uid }: User) => void;
  resetUser: () => void;
}

const handleCheckLoggedInState = ({ setUser, resetUser }: HandleCheckLoggedInStateProps) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      // TODO: If no !email, throw error
      // User is logged in
      const email = user.email ?? '';
      const uid = user.uid;

      setUser({ email, uid });

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
