import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login, NotFoundPage, LoadingPage, Dashboard } from "./pages";
import { Authentificate } from "./security/components";
import { Alert } from "./ui";

import { useAuthStore } from "./security/stores";
import authFirebase from "./security/authFirebase";
import { authProvider } from "./providers";

function App() {
  const setUser = useAuthStore((state) => state.setUser);
  const [isTestingWhoAmi, setIsTestingWhoAmi] = useState(true);

  useEffect(() => {
    const makeWhoAmiCall = async () => {
      authProvider
        .getWhoAmi()
        .then((userConnected) => setUser(userConnected))
        .catch(() => authFirebase.signOut())
        .finally(() => setIsTestingWhoAmi(false));
    };

    makeWhoAmiCall();
  }, [setUser]);

  return isTestingWhoAmi ? (
    <LoadingPage />
  ) : (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route index path="/login" element={<Login />} />
          <Route
            path="/dashboard/*"
            element={
              <Authentificate>
                <Dashboard />
              </Authentificate>
            }
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Alert />
    </div>
  );
}

export default App;
