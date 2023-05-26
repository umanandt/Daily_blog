// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPec0z-IVu_A5B-_afWrxhkitW4oHkPLY",
  authDomain: "dailyblog-65a8e.firebaseapp.com",
  projectId: "dailyblog-65a8e",
  storageBucket: "dailyblog-65a8e.appspot.com",
  messagingSenderId: "1023603645038",
  appId: "1:1023603645038:web:595387aeff29c62643e47f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();