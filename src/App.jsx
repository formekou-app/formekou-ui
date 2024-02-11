import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Profile, NotFoundPage, CreateForm, LoadingPage } from "./pages";
import { Authentificate } from "./security/componens";
import { getWhoAmi } from "./security/authProvider";
import { useAuthStore } from "./security/stores";
import { authFirebase } from "./security/authFirebase";

function App() {
  const { setUser } = useAuthStore();
  const [isTestingWhoAmi, setIsTestingWhoAmi] = useState(false);

  useEffect(() => {
    const makeWhoAmiCall = async () => {
      getWhoAmi()
        .then((userConnected) => setUser(userConnected))
        .catch(() => authFirebase.signOut())
        .finally(() => setIsTestingWhoAmi(false));
    };

    makeWhoAmiCall();
  }, []);

  return (
    isTestingWhoAmi ? <LoadingPage /> : (
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
    )
  );
}

export default App;
