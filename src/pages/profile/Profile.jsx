import { Button } from "@material-tailwind/react";
import { useAuth } from "../../security/hooks";

export function Profile() {
  const authentification = useAuth();

  return (
    <div>
      <div>logged as {JSON.stringify(authentification.user)}</div>
      <Button
        color="blue"
        className="bg-main m-5"
        onClick={() => authentification.logout()}
      >
        Logout
      </Button>
    </div>
  );
}
