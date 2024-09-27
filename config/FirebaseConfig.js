// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV8R7dGI7MDD2r7-yNUTJf0YEUHQ95WZQ",
  authDomain: "smart-journey-a4e4d.firebaseapp.com",
  projectId: "smart-journey-a4e4d",
  storageBucket: "smart-journey-a4e4d.appspot.com",
  messagingSenderId: "616558450524",
  appId: "1:616558450524:web:055e4bedb351c3f25e9399",
  measurementId: "G-816HJ0TV0J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
