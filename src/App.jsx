import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Profile, NotFoundPage, CreateForm, LoadingPage } from "./pages";
import { Authentificate } from "./security/componens";
import { Alert } from "./components";

import { getWhoAmi } from "./security/authProvider";
import { authFirebase } from "./security/authFirebase";
import { useAuthStore } from "./security/stores";

function App() {
  const setUser = useAuthStore((state) => state.setUser);
  const [isTestingWhoAmi, setIsTestingWhoAmi] = useState(true);

  useEffect(() => {
    const makeWhoAmiCall = async () => {
      getWhoAmi()
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
          <Route path="/" element={<Login />} />
          <Route
            path="/profile"
            element={
              <Authentificate>
                <Profile />
              </Authentificate>
            }
          />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/forms/create" element={<CreateForm />} />
        </Routes>
      </BrowserRouter>
      <Alert />
    </div>
  );
}

export default App;
