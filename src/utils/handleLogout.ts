import { AuthError } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

// TODO: Cleanup logs/Polish
/* Handle logging out user */
/* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/password-auth */

interface HandleLogoutProps {
  resetUser: () => void;
}

const handleLogout = ({ resetUser }: HandleLogoutProps) => {
  auth
    .signOut()
    .then(() => {
      resetUser();
      console.log('user is logging out...');
    })
    .catch((error: AuthError) => {
      console.error('The following error has occurred: ', error.message);
    });
};

export default handleLogout;
