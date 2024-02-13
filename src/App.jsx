import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Login,
  Profile,
  NotFoundPage,
  CreateForm,
  LoadingPage,
  Home,
} from "./pages";
import { Authentificate } from "./security/componens";
import { Alert } from "./components";

import authFirebase from "./security/authFirebase";
import authProvider from "./security/authProvider";
import { useAuthStore } from "./security/stores";

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
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Alert />
    </div>
  );
}

export default App;
