import { createContext, useLayoutEffect, useState } from "react";
import { getWhoAmi } from "../security/authProvider";

export const AuthentificationContext = createContext();

export function AuthContext({children}){
  const [user, setUser] = useState(null);
  
  useLayoutEffect(()=>{
    const makeWhoAmiCall = ()=>{
      getWhoAmi()
        .then(userConnected => setUser(userConnected))
        .catch(()=>{})
    }

    makeWhoAmiCall()
  },[])

  return (
    <AuthentificationContext.Provider value={{user, setUser}}>
      {children}
    </AuthentificationContext.Provider>
  )
}
