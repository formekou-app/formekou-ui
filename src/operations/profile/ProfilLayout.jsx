import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useDashboardState } from "../../stores";
import { usersProvider } from "../../providers";
import { useNotify } from "../../hooks";
import { useAuth } from "../../security/hooks";
import { dumbLoading } from "../utils";
import defaultImage from "../../assets/images/default_image.png";

/*eslint-disable*/
export function ProfileLayout({ user, isOwnProfile }) {
  const { register, handleSubmit } = useForm();
  const { isLoading, setIsLoading } = useDashboardState();
  const authentification = useAuth();
  const notify = useNotify();

  const updateForms = async (data) => {
    setIsLoading(true);
    usersProvider
      .updateProfile({
        ...user,
        ...data,
      })
      .then((user) => {
        notify("Profile updated", { color: "green" });
        authentification.setUser(user);
      })
      .catch((error) => {
        notify("Profile not updated", { color: "red" });
        console.log(error);
      })
      .finally(() => dumbLoading(() => setIsLoading(false)));
  };

  if (isLoading) return null;

  const PROFILE_IMG = user.profilePicture ? user.profilePicture : defaultImage;

  return (
    <div className="w-full form-block">
      <img src={PROFILE_IMG} className="w-[100px] mb-5" />
      <form
        onSubmit={handleSubmit(updateForms)}
        className="w-full flex flex-col gap-5 items-end"
      >
        <Input
          defaultValue={user.email}
          label="Email"
          disabled
          {...register("email")}
        />
        <Input
          required
          defaultValue={user.lastName}
          label="Last name"
          disabled={!isOwnProfile}
          {...register("lastName")}
        />
        <Input
          defaultValue={user.fistName}
          label="FirstName"
          disabled={!isOwnProfile}
          {...register("fistName")}
        />
        {isOwnProfile && <Button type="submit">Save</Button>}
      </form>
    </div>
  );
}
