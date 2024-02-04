import {useForm} from "react-hook-form"

export function ManualLoginForm() {
  const { register, handleSubmit } = useForm()
  
  const login = (data)=>{
    //TODO: call signin with email and password
    console.log(data);
  }

  return (
    <form action="submit" className="space-y-6 py-6" onSubmit={handleSubmit(login)}>
      <input type="email" placeholder="Email" className="base-input" {...register("email")} />
      <input type="password" placeholder="Password" className="base-input"  {...register("password")}/>
      <a
        href="#"
        className="text-end block text-sm tracking-wide text-blue-800"
      >
        Forgot password ?
      </a>
      <button className="base-btn main-btn w-full">Login</button>
      <a href="#" className="block text-sm tracking-wide text-blue-800">
        Create new account
      </a>
    </form>
  );
}
