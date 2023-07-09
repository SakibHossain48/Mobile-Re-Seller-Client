// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyA9t_3nVhd_ZyhNni902lVnJty9qg_iL2A",
  authDomain: "final-project-d9556.firebaseapp.com",
  projectId: "final-project-d9556",
  storageBucket: "final-project-d9556.appspot.com",
  messagingSenderId: "781807073984",
  appId: "1:781807073984:web:3eda67b85273f52cf3cb25",
  measurementId: "G-CJYX7ERNF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const storage = getStorage(app);
export default auth;
