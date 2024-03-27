// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH5c4wbFZHK8MBSIN4nmdXYW4pprDUJjQ",
  authDomain: "netflix-gpt-2627a.firebaseapp.com",
  projectId: "netflix-gpt-2627a",
  storageBucket: "netflix-gpt-2627a.appspot.com",
  messagingSenderId: "180030874461",
  appId: "1:180030874461:web:df5b21d759186d64e3beb4",
  measurementId: "G-JPKKVGM5F8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();