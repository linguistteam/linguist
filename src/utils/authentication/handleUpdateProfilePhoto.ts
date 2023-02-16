import { updateProfile } from 'firebase/auth';
import { StorageError, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, storage } from '../../../firebaseConfig';
import { FirebaseError } from '@stores/errors/firebaseError';
import { Loading } from '@stores/loading';
import mapFirebaseAuthErrors from './mapFirebaseAuthErrors';
import mapFirebaseStorageErrors from '../storage/mapFirebaseStorageErrors';

/* Handle updating user photo */
/* Learn more about uploading files to Cloud Storage: https://firebase.google.com/docs/storage/web/upload-files */

/* Learn more about user profile updates: https://firebase.google.com/docs/auth/web/manage-users#update_a_users_profile */

interface HandleUpdateProfilePhotoProps {
  photo: string | null;
  setError: ({ errorMessage, errorCode }: FirebaseError) => void;
  setLoading: ({ isLoading }: Loading) => void;
}

const handleUpdateProfilePhoto = async ({
  photo,
  setError,
  setLoading,
}: HandleUpdateProfilePhotoProps) => {
  if (photo) {
    setLoading({ isLoading: true });

    const response = await fetch(photo);
    const blob = await response.blob();
    const fileName = photo.substring(photo.lastIndexOf('/') + 1);
    const storageRef = ref(storage, `profileImages/${fileName}`);

    uploadBytes(storageRef, blob)
      .then((snapshot) => {
        return snapshot.ref;
      })
      .then((snapshotRef) => {
        return getDownloadURL(snapshotRef);
      })
      .then((photoURL) => {
        if (auth.currentUser) {
          return updateProfile(auth.currentUser, {
            photoURL,
          });
        }
      })
      .then(() => {
        setLoading({ isLoading: false });
      })
      .catch((error: StorageError) => {
        console.error('The following error has occurred: ', error.code);
        if (error.code.includes('auth')) {
          setError({ errorMessage: mapFirebaseAuthErrors(error.code), errorCode: error.code });
        }

        if (error.code.includes('storage')) {
          setError({ errorMessage: mapFirebaseStorageErrors(error.code), errorCode: error.code });
        }

        setLoading({ isLoading: false });
      });
  }
};

export default handleUpdateProfilePhoto;
