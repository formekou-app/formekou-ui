import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context";
import authFirebase from "../authFirebase";
import { getWhoAmi } from "../authProvider";

export function useAuth() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const isConnected = () => user !== null;

  const logout = async () => {
    await authFirebase.logout();
    window.location.reload();
  };

  const login = async (provider) => {
    await authFirebase.login(provider);
    const userConnected = await getWhoAmi();
    setUser(userConnected);
    navigate("/profile");
  };

  return { user, setUser, isConnected, logout, login };
}
