import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "chatting-dd8be.firebaseapp.com",
  projectId: "chatting-dd8be",
  storageBucket: "chatting-dd8be.appspot.com",
  messagingSenderId: "459841531685",
  appId: "1:459841531685:web:7834bc063362e97e19b4cc",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
