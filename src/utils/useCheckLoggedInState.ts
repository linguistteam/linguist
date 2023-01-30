import { auth } from '../../firebaseConfig';

// TODO: Cleanup logs/Polish
/* Handle checking if user is logged in */
/* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/start */

const useCheckLoggedInState = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('user logged in');
    } else {
      console.log('user is logged out');
    }
  });
};

export default useCheckLoggedInState;
