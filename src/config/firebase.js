// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-cLG1tDSydSekar2XaX7cv6ENLQvJlKE",
  authDomain: "hackathon-14c62.firebaseapp.com",
  projectId: "hackathon-14c62",
  storageBucket: "hackathon-14c62.firebasestorage.app",
  messagingSenderId: "693113044348",
  appId: "1:693113044348:web:e07b19a8a4dce693be38f9",
  measurementId: "G-QF2HYPEWM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)

export {auth ,db}