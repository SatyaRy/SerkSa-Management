// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY ,
  authDomain: "serksaapp.firebaseapp.com",
  databaseURL: "https://serksaapp-default-rtdb.firebaseio.com",
  projectId: "serksaapp",
  storageBucket: "serksaapp.appspot.com",
  messagingSenderId: "779181962403",
  appId: "1:779181962403:web:ec0fe7d66392c936623b16",
  measurementId: "G-L7M1E8DBLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);