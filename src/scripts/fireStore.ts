// NPM packages
import { Firestore, DocumentData, getDoc } from "firebase/firestore/lite";
import { collection, getDocs } from "firebase/firestore/lite";
import {
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore/lite";

import { firestoreInstance } from "./firebase";

// Create doc with auto id
export async function createDoc(path: string, data: object) {
  const collectionReference = collection(firestoreInstance, path);
  await addDoc(collectionReference, data);
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

//CREATE CATEGORY
/* export async function createCategory(someCategory, someImage) {
  let newImageURL = "";
  if (typeof someImage === "object") {
    newImageURL = await uploadImage(firebaseInstance, someImage);
  } else {
    newImageURL = someImage;
  }
  const newCategory = { ...someCategory, imageURL: newImageURL };
  createDoc(database, "categories", newCategory);
  alert(newCategory.title + " successfully added to categories");
} */

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
export async function updateDocument(
  db: Firestore,
  path: string,
  id: string,
  data: object
) {
  const docReference = doc(db, path, id);

  await updateDoc(docReference, data as DocumentData);
}

// Delete file
export async function deleteDocument(db: Firestore, path: string, id: string) {
  const docReference = doc(db, path, id);

  await deleteDoc(docReference);
}
