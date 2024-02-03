import imageLogin from "../../assets/images/form.jpg";
import logo from "../../assets/images/logo.png";
import google from "../../assets/images/google.svg";
import GitHubIcon from "@mui/icons-material/GitHub";

export function Login() {
  return (
    <>
      <div className="2xl:container h-screen m-auto">
        <div hidden className="fixed inset-0 w-7/12 lg:block">
          <img className="w-full h-full object-cover" src={imageLogin} />
        </div>
        <div
          hidden
          role="hidden"
          className="fixed inset-0 w-6/12 ml-auto bg-white bg-opacity-70 backdrop-blur-xl lg:block"
        ></div>
        <div className="relative h-full ml-auto lg:w-6/12">
          <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
            <div className="space-y-4">
              <a href="">
                <img src={logo} className="w-40" alt="formekou logo" />
              </a>
              <p className="font-medium text-lg text-gray-600">
                Welcome to formekou
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <button className="py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
                <div className="flex gap-4 justify-center">
                  <img src={google} className="w-5" alt="" />
                  <span className="block w-max font-medium tracking-wide text-sm text-blue-700">
                    with Google
                  </span>
                </div>
              </button>
              <button className="py-3 px-6 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
                <div className="flex gap-4 items-center justify-center text-white">
                  <GitHubIcon className="w-5" />
                  <span className="block w-max font-medium tracking-wide text-sm text-white">
                    with Github
                  </span>
                </div>
              </button>
            </div>

            <div role="hidden" className="mt-12 border-t">
              <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">
                Or
              </span>
            </div>

            <form action="" className="space-y-6 py-6">
              <div>
                <input type="email" placeholder="Email" className="input" />
              </div>

              <div className="flex flex-col items-end">
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                />
                <button type="reset" className="w-max p-3 -mr-3">
                  <span className="text-sm tracking-wide text-blue-800">
                    Forgot password ?
                  </span>
                </button>
              </div>

              <div>
                <button className="w-full px-6 py-3 rounded-xl bg-blue-900 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                  <span className="font-semibold text-white text-lg">
                    Login
                  </span>
                </button>
                <a href="#" type="reset" className="w-max p-3 -ml-3">
                  <span className="text-sm tracking-wide text-blue-800">
                    Create new account
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
