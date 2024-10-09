import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "xike-37f99.firebaseapp.com",
  projectId: "xike-37f99",
  storageBucket: "xike-37f99.appspot.com",
  messagingSenderId: "592669521651",
  appId: "1:592669521651:web:9be380a6214396b56ea986",
  measurementId: "G-5728SJ2X46",
};

export const app = initializeApp(firebaseConfig);
