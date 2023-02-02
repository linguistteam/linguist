import { AuthError, updateProfile } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import { FirebaseAuthError } from '@stores/errors/authError';
import { Loading } from '@stores/loading';
import mapFirebaseAuthErrors from './mapFirebaseAuthErrors';

/* Handle updating user display name */
/* Learn more about user profile updates: https://firebase.google.com/docs/auth/web/manage-users#update_a_users_profile */

interface HandleUpdateDisplayNameProps {
  displayName: string;
  setError: ({ errorMessage, errorCode }: FirebaseAuthError) => void;
  setLoading: ({ isLoading }: Loading) => void;
}

const handleUpdateDisplayName = ({
  displayName,
  setError,
  setLoading,
}: HandleUpdateDisplayNameProps) => {
  setLoading({ isLoading: true });

  // TODO: Fix TS error
  updateProfile(auth.currentUser, {
    displayName,
  })
    .then(() => {
      // TODO: Trigger show alert that says display name has been updated?
      console.log('display name updated!');
      setLoading({ isLoading: false });
    })
    .catch((error: AuthError) => {
      console.error('The following error has occurred: ', error.code);
      setError({ errorMessage: mapFirebaseAuthErrors(error.code), errorCode: error.code });
      setLoading({ isLoading: false });
    });
};

export default handleUpdateDisplayName;