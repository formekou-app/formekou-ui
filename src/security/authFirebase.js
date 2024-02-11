import {
  signOut as firebaseSignOut,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";

const AUTH_ID_TOKEN = "auth_id_token";

const getCachedCredential = () => localStorage.getItem(AUTH_ID_TOKEN)

const cacheCredential = async (credential) => {
  const user = credential?.user;
  if (!user) return credential;
  localStorage.setItem(AUTH_ID_TOKEN, await user.getIdToken());
  return credential;
};

const signIn = async (provider) => {
  if ("email" in provider) {
    const { email, password } = provider;
    return cacheCredential(
      await signInWithEmailAndPassword(auth, email, password)
    );
  }
  return cacheCredential(await signInWithPopup(auth, new provider()));
};

const signup = async (provider) => {
  if ("email" in provider) {
    const { email, password } = provider;
    return cacheCredential(
      await createUserWithEmailAndPassword(auth, email, password)
    );
  }
  return cacheCredential(await signIn(provider));
};

const signOut = async () => {
  await firebaseSignOut(auth);
  localStorage.removeItem(AUTH_ID_TOKEN);
};

export const authFirebase = {
  signIn,
  signOut,
  signup,
  cacheCredential,
  getCachedCredential,
};
