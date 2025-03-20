// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3usUJ6Fuvf8M8btvsgEMNdFSQdrJqo5c",
  authDomain: "heintz-enterprize.firebaseapp.com",
  projectId: "heintz-enterprize",
  storageBucket: "heintz-enterprize.firebasestorage.app",
  messagingSenderId: "1087145791371",
  appId: "1:1087145791371:web:0d1bd47d48ecc09553698e",
  measurementId: "G-W0V58FNZXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);