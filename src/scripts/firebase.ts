// NPM package
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXf16s3a7H2coBwFFzCfmY-Xvr7sbsk8s",
  authDomain: "lms-npa.firebaseapp.com",
  projectId: "lms-npa",
  storageBucket: "lms-npa.appspot.com",
  messagingSenderId: "998505890228",
  appId: "1:998505890228:web:54a77f5828ddab7d1632e1",
};

const firebaseInstance = initializeApp(firebaseConfig);

export const firestoreInstance = getFirestore(firebaseInstance);
export const authInstance = getAuth(firebaseInstance);

export const cloudStorageReference = getStorage(firebaseInstance);
