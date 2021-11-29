// NPM packages
import { Firestore, getDoc } from "firebase/firestore/lite";
import { collection, getDocs } from "firebase/firestore/lite";
import {
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  setDoc,
  deleteField,
} from "firebase/firestore/lite";

import { firestoreInstance } from "./firebase";

// Create doc with auto id
export async function createDoc(path: string, data: object) {
  const collectionReference = collection(firestoreInstance, path);
  const documentReference = await addDoc(collectionReference, data);
  return documentReference.id;
}

export async function createDocumentWithId(
  path: string,
  id: string,
  data: object
) {
  const documentReference = doc(firestoreInstance, path, id);
  await setDoc(documentReference, data);

  return id;
}


// Read files
export async function getCollection(db: Firestore, path: string) {
  const collectionReference = collection(db, path);
  const snapshop = await getDocs(collectionReference);
  const list = snapshop.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return list;
}

export async function getDocument(path: string, id: string) {
  const documentReference = doc(firestoreInstance, path, id);
  const document = await getDoc(documentReference);
  return { id: document.id, ...document.data() };
}

// Update file
export async function updateDocument(path: string, id: string, data: object) {
  const docReference = doc(firestoreInstance, path, id);
  let updatedCourse = { ...data };
  // if (data.files !== [] && data.files[0].size) {
  //   const field = await getUrlNameArray(data.files);
  //   updatedCourse.files = field;
  // }

  await updateDoc(docReference, updatedCourse);
}


// Delete file
export async function deleteDocument(path: string, id: string) {
  const docReference = doc(firestoreInstance, path, id);
  await deleteDoc(docReference);
}

