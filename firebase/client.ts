import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj198xXiQYONWaOh1H4yapf1SS61bqrgA",
  authDomain: "prepwise-61d04.firebaseapp.com",
  projectId: "prepwise-61d04",
  storageBucket: "prepwise-61d04.firebasestorage.app",
  messagingSenderId: "454791236809",
  appId: "1:454791236809:web:9ba806d6d49864104e5118",
  measurementId: "G-91CF6WN84G"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();
export const auth= getAuth(app);
export const db = getFirestore(app);