// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ01gOcGua2PH5W3I913o6pAUJFEkLEPU",
  authDomain: "netflixgpt-ashish.firebaseapp.com",
  projectId: "netflixgpt-ashish",
  storageBucket: "netflixgpt-ashish.appspot.com",
  messagingSenderId: "22034402916",
  appId: "1:22034402916:web:591697e458d698603cd971",
  measurementId: "G-98VNR4RYJD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
