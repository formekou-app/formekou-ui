import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { AuthentificationContext } from "./context";
import { Login, Profile } from "./pages";
import Authentificate from "./security/Authentificate";

function App(){
  return (
    <AuthentificationContext>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />}/>
          <Route element={
            <Authentificate>
              <Profile />
            </Authentificate>
          }/>
        </Routes>
      </BrowserRouter>
    </AuthentificationContext>
  )
}

export default App;
