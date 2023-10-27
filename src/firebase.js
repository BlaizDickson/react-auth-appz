// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx9uf8YmMX6YqmA0H0cGhteSHylRO1qcI",
  authDomain: "react-firebase-auth-emai-418f0.firebaseapp.com",
  projectId: "react-firebase-auth-emai-418f0",
  storageBucket: "react-firebase-auth-emai-418f0.appspot.com",
  messagingSenderId: "1040068194848",
  appId: "1:1040068194848:web:d9130a349731f601828245"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export default app;