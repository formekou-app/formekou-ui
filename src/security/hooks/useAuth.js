import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores";
import { authFirebase } from "../authFirebase";
import { getWhoAmi, postSignup } from "../authProvider";

export function useAuth() {
  const navigate = useNavigate();
  const { user, setUser } = useAuthStore();

  const isConnected = () => user !== null;

  const signOut = async () => {
    await authFirebase.signOut();
    setUser(null);
    navigate("/");
  };

  const signIn = async (provider) => {
    await authFirebase.signIn(provider);
    const userConnected = await getWhoAmi();
    setUser(userConnected);
    navigate("/profile");
  };

  const signupWithEmail = async (provider) => {
    await authFirebase.signup(provider);
    signIn(await postSignup(provider));
  };

  return {
    user,
    setUser,
    signIn,
    signOut,
    signupWithEmail,
    isConnected,
  };
}
