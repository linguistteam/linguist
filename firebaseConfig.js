// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseDevConfig = {
  apiKey: 'AIzaSyBJuyRjBX3lhdjpNy-wctTyAECkJOpemZE',
  authDomain: 'linguist-a3b98.firebaseapp.com',
  projectId: 'linguist-a3b98',
  storageBucket: 'linguist-a3b98.appspot.com',
  messagingSenderId: '19062759667',
  appId: '1:19062759667:web:87e6d95b4496c8e524d786',
  measurementId: 'G-KY2WD5MZ23',
};

// Initialize Firebase
const app = initializeApp(firebaseDevConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
