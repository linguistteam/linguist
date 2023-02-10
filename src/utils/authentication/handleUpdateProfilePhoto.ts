import { updateProfile } from 'firebase/auth';
import { StorageError, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { FirebaseError } from '@stores/errors/firebaseError';
import { Loading } from '@stores/loading';
import { auth, storage } from '../../../firebaseConfig';

/* Handle updating user photo */
/* Learn more about uploading files to Cloud Storage: https://firebase.google.com/docs/storage/web/upload-files */
/* Learn more about user profile updates: https://firebase.google.com/docs/auth/web/manage-users#update_a_users_profile */

interface HandleUpdateProfilePhotoProps {
  photo: string | null;
  setError: ({ errorMessage, errorCode }: FirebaseError) => void;
  setLoading: ({ isLoading }: Loading) => void;
}

const handleUpdateProfilePhoto = async ({ photo, setLoading }: HandleUpdateProfilePhotoProps) => {
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
        // TODO: Map all storage errors and handle setting/mapping errors here
        console.error('error occurred', error);
        setLoading({ isLoading: false });
      });
  }
};

export default handleUpdateProfilePhoto;
