// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-febb5.firebaseapp.com",
  projectId: "mern-estate-febb5",
  storageBucket: "mern-estate-febb5.appspot.com",
  messagingSenderId: "73677688694",
  appId: "1:73677688694:web:603a9ccdd66d96fdc1b457"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);