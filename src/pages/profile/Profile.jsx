import { Button } from "@material-tailwind/react";
import { useAuth } from "../../security/hooks/useAuth";

export function Profile() {
  const authentification = useAuth();
  return (
    <div>
      <div>logged as {JSON.stringify(authentification.user)}</div>
      <Button
        color="blue"
        className="bg-main m-5"
        onClick={() => authentification.signOut()}
      >
        Logout
      </Button>
    </div>
  );
}
