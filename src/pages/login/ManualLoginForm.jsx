export function ManualLoginForm(){
  return(
    <form action="submit" className="space-y-6 py-6">
      <input type="email" placeholder="Email" className="base-input" />
      <input type="password" placeholder="Password" className="base-input"/>
      <a href="#" className="text-end block text-sm tracking-wide text-blue-800">
        Forgot password ?
      </a>
      <button className="base-btn main-btn w-full">
        Login
      </button>
      <a href="#" className="block text-sm tracking-wide text-blue-800">
        Create new account
      </a>
    </form>
  )
}

