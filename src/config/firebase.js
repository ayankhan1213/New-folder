import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwQxpbqGOpurblqEWjXgY1V3RqrXGGIuM",
  authDomain: "ecommerceproject-a3873.firebaseapp.com",
  projectId: "ecommerceproject-a3873",
  storageBucket: "ecommerceproject-a3873.firebasestorage.app",
  messagingSenderId: "297025171830",
  appId: "1:297025171830:web:3e83110086a3e2d1374a57",
  measurementId: "G-JZX18KB0DZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);