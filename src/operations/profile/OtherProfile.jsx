import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

import { usersProvider } from "../../providers";
import { useDashboardState } from "../../stores";
import { dumbLoading } from "../utils";
import { ProfileLayout } from "./ProfilLayout";

/*eslint-disable*/
export function OtherProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const { setIsLoading, isLoading } = useDashboardState();
  const navigate = useNavigate();

  useEffect(() => {
    const getUserById = async () => {
      usersProvider
        .getUserById(userId)
        .then((user) => {
          setUser(user);
        })
        .catch(() => navigate("/dashboard/error/user"))
        .finally(() => dumbLoading(() => setIsLoading(false)));
    };
    getUserById();
  }, []);

  if (isLoading || !user) {
    return null;
  }

  return (
    <div className="form-block w-full">
      <Typography className="font-semibold text-bgray ml-5">
        User's Profile
      </Typography>
      <ProfileLayout isOwnProfile={false} user={user} />
    </div>
  );
}
