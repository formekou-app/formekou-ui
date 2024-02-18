import { ProfileLayout } from "./ProfilLayout";
import { useAuth } from "../../security/hooks/useAuth";
import { Typography } from "@material-tailwind/react";

export function ProfileShow() {
  const authentification = useAuth();
  return (
    <div className="form-block w-full">
      <Typography className="font-semibold text-bgray ml-5">
        My profile
      </Typography>
      <ProfileLayout isOwnProfile={true} user={authentification.user} />
    </div>
  );
}
