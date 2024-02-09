import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Profile, NotFoundPage, EditForm } from "./pages";
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
          <Route path="/create" element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
