import { useAuth } from "../../security/hooks"

export function Profile(){
  const authentification = useAuth();
  
  return (
    <div>
      <div>
        logged as {JSON.stringify(authentification.user)}
      </div>
      <button onClick={()=>authentification.logout()}>
        Logout
      </button>
    </div>
  )
}
