// NPM package
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbY6EZHVVudszDMs8QlNMJzzaXI0qk5og",
  authDomain: "learning-platform-giang.firebaseapp.com",
  projectId: "learning-platform-giang",
  storageBucket: "learning-platform-giang.appspot.com",
  messagingSenderId: "609307702361",
  appId: "1:609307702361:web:f6a23a63d53f2749236d48",
};

const firebaseInstance = initializeApp(firebaseConfig);

export const firestoreInstance = getFirestore(firebaseInstance);
export const authInstance = getAuth(firebaseInstance);
