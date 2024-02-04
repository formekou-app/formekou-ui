import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Profile } from "./pages";
import { AuthProvider } from "./context";
import { Authentificate } from "./security/componens";

function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/profile" element={
              <Authentificate>
                <Profile />
              </Authentificate>
            }/>
            { /* TODO: Change not found design*/ }
            <Route path="/*" element={<h2 className="text-center text-xl mt-5">Not Found</h2>}/>
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
