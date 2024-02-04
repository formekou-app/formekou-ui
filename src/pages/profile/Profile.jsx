import { useAuth } from "../../security/hooks";

export function Profile() {
  const authentification = useAuth();

  return (
    <div>
      <div>logged as {JSON.stringify(authentification.user)}</div>
      <button
        className="main-btn m-5"
        onClick={() => authentification.logout()}
      >
        Logout
      </button>
    </div>
  );
}
