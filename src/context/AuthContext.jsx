/*eslint-disable*/
import { createContext, useEffect, useState } from "react";
import { getWhoAmi } from "../security/authProvider";
import authFirebase from "../security/authFirebase";
import { LoadingPage } from "../pages";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isTestingWhoAmi, setIsTestingWhoAmi] = useState(false);

  useEffect(() => {
    const makeWhoAmiCall = async () => {
      getWhoAmi()
        .then((userConnected) => setUser(userConnected))
        .catch(() => authFirebase.logout())
        .finally(() => setIsTestingWhoAmi(false));
    };

    // makeWhoAmiCall();
  }, []);

  return isTestingWhoAmi ? (
    <LoadingPage />
  ) : (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
