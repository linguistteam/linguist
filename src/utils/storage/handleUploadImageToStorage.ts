import { updateProfile } from 'firebase/auth';
import { StorageError, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Loading } from '@stores/loading';
import { auth, storage } from '../../../firebaseConfig';

/* Handle uploading image to Firebase Cloud Storage */
/* Learn more about uploading files to Cloud Storage: https://firebase.google.com/docs/storage/web/upload-files */

interface HandleUploadImageToStorageProps {
  photo: string | null;
  // TODO: Add proper type
  setPhoto: any;
  setLoading: ({ isLoading }: Loading) => void;
}

const handleUploadImageToStorage = async ({
  photo,
  setPhoto,
  setLoading,
}: HandleUploadImageToStorageProps) => {
  if (photo) {
    setLoading({ isLoading: true });

    const response = await fetch(photo);
    const blob = await response.blob();
    const fileName = photo.substring(photo.lastIndexOf('/') + 1);
    const storageRef = ref(storage, fileName);

    uploadBytes(storageRef, blob)
      .then((snapshot) => {
        return snapshot.ref;
      })
      .then((snapshotRef) => {
        return getDownloadURL(snapshotRef);
      })
      .then((photoURL) => {
        console.log('photoURL', photoURL);
        return updateProfile(auth.currentUser, {
          photoURL,
        });
      })
      .then(() => {
        setLoading({ isLoading: false });
      })
      .catch((error: StorageError) => {
        // TODO: Map all storage errors and handle setting/mapping errors here
        console.error('error occurred', error);
        setPhoto(null);
        setLoading({ isLoading: false });
      });
  }
};

export default handleUploadImageToStorage;
