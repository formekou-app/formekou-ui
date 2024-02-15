import { Button } from "@material-tailwind/react";
import { useAuth } from "../../security/hooks/useAuth";

export function ProfileShow() {
  const authentification = useAuth();
  return (
    <div className="w-full">
      <div>logged as {JSON.stringify(authentification.user)}</div>
      <Button
        className="m-5"
        size="sm"
        onClick={() => authentification.signOut()}
      >
        Logout
      </Button>
    </div>
  );
}
