import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks"

function Authentificate({children}){
  const authentication = useAuth();
  return (
    authentication.isConnected() 
    ? <Navigate to={"/login"}/>
    : children
  );
}

export default Authentificate;
