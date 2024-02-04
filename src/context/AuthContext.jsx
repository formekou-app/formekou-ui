/*eslint-disable*/
import { createContext, useEffect, useState } from "react";
import { getWhoAmi } from "../security/authProvider";
import authFirebase from "../security/authFirebase";

export const AuthContext = createContext();

//TODO: creating a loading page and maybe use zustand
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isTestingWhoAmi, setIsTestingWhoAmi] = useState(true);

  useEffect(() => {
    const makeWhoAmiCall = async () => {
      getWhoAmi()
        .then((userConnected) => setUser(userConnected))
        .catch(() => authFirebase.logout())
        .finally(() => setIsTestingWhoAmi(false));
    };

    makeWhoAmiCall();
  }, []);

  return isTestingWhoAmi ? (
    <h2>Loading</h2>
  ) : (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
