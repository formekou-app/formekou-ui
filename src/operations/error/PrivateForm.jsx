import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

import errorImage from "../../assets/images/error_multiple.png";

export function PrivateForm() {
  const navigate = useNavigate();

  return (
    <div className="w-[500px] mx-auto flex-col min-h-[500px] gap-5 flex items-center justify-center">
      <img src={errorImage} className="w-[350px]" />
      <Typography className="text-bgray text-[30px] text-center">
        Only the form owner can view the results as the form is set to private
      </Typography>
      <Button onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>
    </div>
  );
}
