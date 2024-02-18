import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

import errorImage from "../../assets/images/private.png";

export function UserNotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-[800px] mx-auto flex-col min-h-[500px] gap-5 flex items-center justify-center">
      <img src={errorImage} className="w-[350px]" />
      <Typography className="text-bgray text-[30px] text-center">
        User not found or connexion error
      </Typography>
      <Button onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>
    </div>
  );
}
