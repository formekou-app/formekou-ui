import { Link } from "react-router-dom";

import codeStatus from "../assets/images/404-2.png";
import group from "../assets/images/Group.png";

export function NotFoundPage() {
  return (
    <div className="nf-container">
      <div className="resp-container relative">
        <div className="absolute">
          <h1 className="my-2 text-gray-800 font-bold text-2xl">
            Looks like you have found the doorway to the great nothing
          </h1>
          <p className="my-2 text-gray-800">
            Sorry about that! Please visit our homepage to get where you need to
            go.
          </p>
          <button className="other-btn">
            <Link to="/"> Take me there! </Link>
          </button>
        </div>
        <img src={codeStatus} />
      </div>
      <img src={group} />
    </div>
  );
}
