import { useContext} from "react"
import { AuthentificationContext } from "../context";
import authFirebase from "../authFirebase";
import { getWhoAmi } from "../authProvider";
import { useNavigate } from "react-router-dom";

export function useAuth(){
  const {user, setUser} = useContext(AuthentificationContext);
  const navigate = useNavigate();

  const isConnected = ()=> user !== null;
  
  const logout = async ()=>{
    await authFirebase.logout();
    window.location.reload();
  }

  const login = async (provider)=>{
    try{
      await authFirebase.login(provider);
      setUser(await getWhoAmi());
      navigate("/profile");
    }catch(error){
      alert("Connexion failed");
    }
  }

  return {user, setUser, isConnected, logout, login};
}
