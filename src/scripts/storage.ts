import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Create a root reference
const storage = getStorage();

// @ts-ignore
export default async function uploadImage(file) {
  const myRef = ref(storage, `${file.name}_${Date.now()}`);
  await uploadBytes(myRef, file);
  return getDownloadURL(myRef);
}
