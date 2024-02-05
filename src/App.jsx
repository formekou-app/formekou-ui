import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Profile, Signup } from "./pages";
import { AuthProvider } from "./context";
import { Authentificate } from "./security/componens";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <AuthProvider>
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
          <Route path="/signup" element={<Signup />} />
          {/* TODO: Change not found design*/}
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
