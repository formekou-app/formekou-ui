import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Profile, Signup, NotFoundPage } from "./pages";
import { AuthProvider } from "./context";
import { Authentificate } from "./security/componens";

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

          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
