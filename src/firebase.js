// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDHAX9iaQFj7RavIQ8uxHdbXYK3Gqc8oA",
  authDomain: "react-paint-app.firebaseapp.com",
  projectId: "react-paint-app",
  storageBucket: "react-paint-app.appspot.com",
  messagingSenderId: "130783419688",
  appId: "1:130783419688:web:8daf6e9866c4c2899d041d",
  measurementId: "G-4LF911JCW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;