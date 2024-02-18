import { Button, Typography } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";

import successImage from "../../assets/images/success.png";
import { useEffect, useState } from "react";
import { formsProvider } from "../../providers";
import { dumbLoading } from "../utils";
import { useDashboardState } from "../../stores";

/*eslint-disable*/
export function SuccessReplied() {
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useDashboardState();
  const [canReply, setCanReply] = useState(true);
  const { formId } = useParams();

  useEffect(() => {
    const testIfCanReply = async () => {
      formsProvider
        .canIReply(formId)
        .then((response) => setCanReply(response))
        .catch(() => {})
        .finally(() => dumbLoading(setIsLoading(false)));
    };

    testIfCanReply();
  }, []);

  if (isLoading) return null;

  return (
    <div className="w-[800px] mx-auto flex-col min-h-[500px] gap-5 flex items-center justify-center">
      <img src={successImage} className="w-[250px]" />
      <Typography className="text-bgray text-[30px] text-center">
        Your response has been saved successfully
      </Typography>
      <div className="flex gap-5">
        {canReply && (
          <Button
            variant="outlined"
            onClick={() => navigate(`/dashboard/forms/${formId}/reply`)}
          >
            Make another response
          </Button>
        )}
        <Button onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>
      </div>
    </div>
  );
}
