/*eslint-disable*/
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

//TODO: change / path to /login after having a home page
export function Authentificate({ children }) {
  const authentification = useAuth();
  return authentification.isConnected() ? children : <Navigate to={"/"} />;
}
