import { useContext } from "react";
import { AuthContext } from "../../context";
import authFirebase from "../authFirebase";
import { getWhoAmi } from "../authProvider";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const isConnected = () => user !== null;

  const logout = async () => {
    await authFirebase.logout();
    window.location.reload();
  };

  const login = async (provider) => {
    try {
      await authFirebase.login(provider);
      const userConnected = await getWhoAmi();
      setUser(userConnected);
      navigate("/profile");
    } catch (error) {
      //TODO: show notification properly
      alert("Connexion failed");
      console.log(error);
    }
  };

  return { user, setUser, isConnected, logout, login };
}
