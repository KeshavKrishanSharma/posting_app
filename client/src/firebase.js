// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaRIaLTjQYxqbqsWp3SUiVn4g-kH_Ey5w",
  authDomain: "posting-app-73b02.firebaseapp.com",
  projectId: "posting-app-73b02",
  storageBucket: "posting-app-73b02.appspot.com",
  messagingSenderId: "627657181767",
  appId: "1:627657181767:web:2f0a6b60a58a5508023f62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, storage, app };
