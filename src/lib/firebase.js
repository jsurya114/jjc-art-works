import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC0GwFTKSoTiDYrTr-LEA5X3VXz4z5b8b8",
  authDomain: "jjcworks-560fd.firebaseapp.com",
  projectId: "jjcworks-560fd",
  storageBucket: "jjcworks-560fd.firebasestorage.app",
  messagingSenderId: "355252870720",
  appId: "1:355252870720:web:8acbf40b4ff355a5d7c9a5",
  measurementId: "G-LP137G01CK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
