// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2iRRwEjVqoEiLU2qEJghgBwfM2XR2T_w",
  authDomain: "gmimobiliaria-6e151.firebaseapp.com",
  projectId: "gmimobiliaria-6e151",
  storageBucket: "gmimobiliaria-6e151.appspot.com",
  messagingSenderId: "1090511685210",
  appId: "1:1090511685210:web:72ca4dd471ca308409fa63",
  measurementId: "G-0DSNCTPBLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
