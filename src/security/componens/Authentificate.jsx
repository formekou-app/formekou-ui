import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks"

//TODO: change / path to /login after having a home page
export function Authentificate({ children }) {
  const authentication = useAuth();
  return (
    authentication.isConnected()
      ? children
      : <Navigate to={"/"} />
  );
}
