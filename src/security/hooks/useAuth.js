import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores";
import authFirebase from "../authFirebase";
import authProvider from "../authProvider";

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
    const userConnected = await authProvider.getWhoAmi();
    setUser(userConnected);
    navigate("/profile");
  };

  const signupWithEmail = async (provider) => {
    await authFirebase.signup(provider);
    setUser(await authProvider.signup(provider));
    navigate("/profile");
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
