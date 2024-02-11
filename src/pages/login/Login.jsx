import { useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { ManualLoginForm } from "./ManualLoginForm";

import { useNotify } from "../../hooks";
import { useAuth } from "../../security/hooks/useAuth";

import imageLogin from "../../assets/images/form.jpg";
import googleIcon from "../../assets/images/google.svg";
import formekouLogo from "../../assets/images/formekou.png";

//TODO: show cool loading
export function Login() {
  const authentification = useAuth();
  const notify = useNotify();
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      await authentification.signIn(GoogleAuthProvider);
    } catch (error) {
      notify("Oops, An error occured, please try again !!", { color: "red" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-white">
      <div className="2xl:container bg-white h-screen m-auto">
        <img
          className="fixed inset-0 w-7/12 hidden lg:block h-full"
          src={imageLogin}
        />
        <div className="relative h-full ml-auto lg:w-6/12">
          <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
            <a href="#">
              <img src={formekouLogo} className="w-40" alt="formekou logo" />
            </a>
            <p className="text-gray-600 text-lg mt-1"> Welcome to formekou </p>
            <button
              disabled={isLoading}
              className="transition py-3 px-6 mt-4 rounded-xl flex gap-4 justify-center bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200"
              onClick={loginWithGoogle}
            >
              <img src={googleIcon} className="w-6 block" />
              <span className="text-blue-700"> with Google </span>
            </button>
            <div role="hidden" className="mt-7 border-t">
              <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">
                Or
              </span>
            </div>
            <ManualLoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
