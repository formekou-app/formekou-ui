import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

import codeStatus from "../assets/images/404-2.png";
import group from "../assets/images/Group.png";

//TODO:  refactor all button using material tailwind button
export function NotFoundPage() {
  const navigate = useNavigate();

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
          <Button onClick={() => navigate("/")} className="bg-main">
            Take me there!
          </Button>
        </div>
        <img src={codeStatus} />
      </div>
      <img src={group} />
    </div>
  );
}
