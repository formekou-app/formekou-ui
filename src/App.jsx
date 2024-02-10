import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Profile, NotFoundPage, CreateForm, Home } from "./pages";
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
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/forms/create" element={<CreateForm />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
