// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-605f7.firebaseapp.com",
  projectId: "mern-estate-605f7",
  storageBucket: "mern-estate-605f7.firebasestorage.app",
  messagingSenderId: "940187204070",
  appId: "1:940187204070:web:eb700c6b7abcd885b87e27",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
