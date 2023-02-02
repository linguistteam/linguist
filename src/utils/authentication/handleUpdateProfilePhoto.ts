import { AuthError, updateProfile } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import { FirebaseAuthError } from '@stores/errors/authError';
import { Loading } from '@stores/loading';
import mapFirebaseAuthErrors from './mapFirebaseAuthErrors';

/* Handle updating user photo */
/* Learn more about user profile updates: https://firebase.google.com/docs/auth/web/manage-users#update_a_users_profile */

interface HandleUpdateProfilePhotoProps {
  photoURL: string;
  setError: ({ errorMessage, errorCode }: FirebaseAuthError) => void;
  setLoading: ({ isLoading }: Loading) => void;
}

const handleUpdateProfilePhoto = ({
  photoURL,
  setError,
  setLoading,
}: HandleUpdateProfilePhotoProps) => {
  setLoading({ isLoading: true });

  // TODO: Fix TS error
  updateProfile(auth.currentUser, {
    photoURL,
  })
    .then(() => {
      // TODO: Trigger show alert that says profile image has been updated?
      console.log('photo updated!');
      setLoading({ isLoading: false });
    })
    .catch((error: AuthError) => {
      console.error('The following error has occurred: ', error.code);
      setError({ errorMessage: mapFirebaseAuthErrors(error.code), errorCode: error.code });
      setLoading({ isLoading: false });
    });
};

export default handleUpdateProfilePhoto;
