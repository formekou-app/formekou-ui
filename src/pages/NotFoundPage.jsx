import codeStatus from "../assets/images/404-2.png";
import group from "../assets/images/Group.png";
import { Link } from "react-router-dom";
export function NotFoundPage() {
  return (
    <div className="flex-container">
      <div className="container">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                Looks like you have found the doorway to the great nothing
              </h1>
              <p className="my-2 text-gray-800">
                Sorry about that! Please visit our homepage to get where you
                need to go.
              </p>
              <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                <Link to="/"> Take me there! </Link>
              </button>
            </div>
          </div>
          <div>
            <img src={codeStatus} />
          </div>
        </div>
      </div>
      <div>
        <img src={group} />
      </div>
    </div>
  );
}
