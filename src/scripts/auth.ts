// NPM packages
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

// Project files
import { authInstance } from "./firebase";

export async function createAccount(email: string, password: string) {
  const account = { isCreated: false, payload: "" };

  try {
    const userCredential = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.isCreated = true;
    account.payload = userCredential.user.uid;
  } catch (error: any) {
    console.error("Authentication error", error);
    account.payload = error.code;
  }
  return account;
}

export async function signIn(email: string, password: string) {
  const account = { isLogged: false, payload: "" };

  try {
    const userCredential = await signInWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.payload = userCredential.user.uid;
    account.isLogged = true;
  } catch (error: any) {
    account.payload = error.message;
  }
  return account;
}

export async function logOut() {
  const account = { isLogOut: false, payload: "" };

  try {
    await signOut(authInstance);
    account.isLogOut = true;
    account.payload = "Logout successfully";
  } catch (error: any) {
    console.error("Authentication error", error);
    account.payload = error.code;
  }

  return account;
}

export async function reset(email: string) {
  const account = { isReset: false, payload: "" };

  try {
    await sendPasswordResetEmail(authInstance, email);
    account.payload =
      "A request has been received to change your password. A link to reset your password has been sent to your email ";
    account.isReset = true;
  } catch (error: any) {
    account.payload = error.message;
  }
  return account;
}
