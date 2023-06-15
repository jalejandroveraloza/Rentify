// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxAn3vmE1_l1LzOtwfIxEI4HgZMFQ_caE",
  authDomain: "loginpage-915b8.firebaseapp.com",
  projectId: "loginpage-915b8",
  storageBucket: "loginpage-915b8.appspot.com",
  messagingSenderId: "438758937466",
  appId: "1:438758937466:web:1f155928853df74817fcc3",
  measurementId: "G-051TDDPRRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();