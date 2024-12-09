import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWbzCD8kVr_9gpFQTJsrhxcwlr4CKKrmM",
  authDomain: "ecommerce-mu2.firebaseapp.com",
  projectId: "ecommerce-mu2",
  storageBucket: "ecommerce-mu2.firebasestorage.app",
  messagingSenderId: "209291624920",
  appId: "1:209291624920:web:518067ae1d19b6388bb2ad",
  measurementId: "G-HEWVMRSDM7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
