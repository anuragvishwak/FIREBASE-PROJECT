// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbt7LdR-z5Ee0M9GFTYe-1FmfRuquH4BU",
  authDomain: "recipe-app-e4896.firebaseapp.com",
  projectId: "recipe-app-e4896",
  storageBucket: "recipe-app-e4896.appspot.com",
  messagingSenderId: "449403419213",
  appId: "1:449403419213:web:155dfd99a94a411b6efa04",
  measurementId: "G-9SX1LQZDN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export {app}