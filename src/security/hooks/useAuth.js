import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores";
import { authProvider, usersProvider } from "../../providers";
import authFirebase from "../authFirebase";

export function useAuth() {
  const navigate = useNavigate();
  const { user, setUser } = useAuthStore();

  const isConnected = () => user !== null;

  const signOut = async () => {
    await authFirebase.signOut();
    window.location.reload(true);
  };

  const signIn = async (provider) => {
    await authFirebase.signIn(provider);
    const userConnected = await authProvider.getWhoAmi();
    setUser(userConnected);
    navigate("/dashboard");
  };

  //TODO: not do everything here
  const signupWithEmail = async (provider) => {
    await authFirebase.signup(provider);
    const user = await authProvider.getWhoAmi();
    setUser(
      await usersProvider.updateProfile({
        ...user,
        lastName: provider.lastName,
      })
    );
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
