import {
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "../config/firebase";

const AUTH_ID_TOKEN = "auth_id_token";
const AUTH_EMAIL = "auth_email";

const cacheCredential = async (credential) => {
  const user = credential?.user;
  if (!user) return credential;
  localStorage.setItem(AUTH_EMAIL, user.email ?? "");
  localStorage.setItem(AUTH_ID_TOKEN, await user.getIdToken());
  return credential;
};

const getCachedAuth = () => ({
  token: localStorage.getItem(AUTH_ID_TOKEN),
  email: localStorage.getItem(AUTH_EMAIL),
});

const login = async (provider) => {
  if ("email" in provider) {
    const {email, password} = provider;
    return cacheCredential(
      await signInWithEmailAndPassword(auth, email, password)
    );
  }
  return cacheCredential(await signInWithPopup(auth, new provider()));
};

const signup = async (provider)=> {
  if ("email" in provider) {
    const {email, password} = provider;
    return cacheCredential(
      await createUserWithEmailAndPassword(auth, email, password)
    );
  }
  return cacheCredential(await login(provider));
};

const logout = async ()=> {
  await signOut(auth);
  localStorage.removeItem(AUTH_ID_TOKEN);
  localStorage.removeItem(AUTH_EMAIL);
};

const authFirebase = {
  login,
  logout,
  signup,
  cacheCredential,
  getCachedAuth
};

export default authFirebase;
