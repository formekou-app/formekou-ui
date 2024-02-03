import { GitHub as GitHubIcon} from "@mui/icons-material";

import { ManualLoginForm } from "./ManualLoginForm";

import imageLogin from "../../assets/images/form.jpg";
import googleIcon from "../../assets/images/google.svg";
import formekouLogo from "../../assets/images/formekou.png";

export function Login() {
  const logGoogleUser = async () => {
    console.log("will call google singin");
  }

  return (
    <main className="2xl:container h-screen m-auto">
      <img className="fixed inset-0 w-7/12 hidden lg:block h-full object-cover" src={imageLogin} />
      <div className="relative h-full ml-auto lg:w-6/12">
        <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
          <a href="#"> 
            <img src={formekouLogo} className="w-40" alt="formekou logo" />
          </a>
          <p className="text-lg text-gray-600 mt-1"> Welcome to formekou </p>
          <div className="mt-5 flex gap-6 items-center">
            <button 
              className="base-btn bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200"
              onClick={logGoogleUser}
            >
              <img src={googleIcon} className="w-6 block"/>
              <span className="text-blue-700"> with Google </span>
            </button>
            <button 
              className="base-btn bg-gray-900 hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700"
              onClick={logGoogleUser}
            >
              <GitHubIcon className="w-5 text-white" />
              <span className="text-white"> with Github</span>
            </button>
          </div>
          <div role="hidden" className="mt-7 border-t">
            <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">
              Or
            </span>
          </div>
          <ManualLoginForm />
        </div>
      </div>
    </main>
  );
}
