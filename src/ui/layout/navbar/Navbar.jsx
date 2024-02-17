import { Button } from "@material-tailwind/react";

import defaultImage from "../../../assets/images/default_image.png";
import logoImage from "../../../assets/images/logo.png";
import { useAuthStore } from "../../../security/stores";
import { useAuth } from "../../../security/hooks";

export function Navbar() {
  const user = useAuthStore((state) => state.user);
  const auth = useAuth();

  const PROFILE_IMAGE =
    user && user.profilePicture ? user.profilePicture : defaultImage;

  return (
    <div className="z-50 w-full border-b-[1px] border-b-gray-200 flex items-center justify-between h-[50px] px-[10px] bg-white fixed top-0 left-0">
      <div className="flex items-center gap-2">
        <img src={logoImage} className="w-[35px] h-[35px]" />
        <p className="font-bold">Formekou</p>
      </div>
      <div className="flex gap-3 items-center">
        <Button
          size="sm"
          className="rounded-[5px] bg-main-black"
          onClick={() => auth.signOut()}
        >
          Logout
        </Button>
        <img src={PROFILE_IMAGE} className="w-[35px] h-[35px] rounded-[50%]" />
      </div>
    </div>
  );
}
