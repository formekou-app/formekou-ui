import { useForm } from "react-hook-form";
import { useAuth } from "../../security/hooks";
import { useState } from "react";
import { postSignup } from "../../security/authProvider";

export function ManualLoginForm() {
  const [isCreate, setIsCreate] = useState(false);
  const { register, handleSubmit } = useForm();
  const authentification = useAuth();

  const loginManually = async ({ ...data }) => {
    if (!isCreate) {
      delete data.lastName;
      await authentification.login(data);
      return;
    }

    try {
      await postSignup(data);
      setIsCreate(false);
    } catch (error) {
      alert("Signup failed");
      console.log(error);
    }
  };

  return (
    <form
      action="submit"
      className="space-y-6 py-6"
      onSubmit={handleSubmit(loginManually)}
    >
      <input
        type="email"
        placeholder="Email"
        className="base-input"
        {...register("email")}
      />
      <input
        type="password"
        placeholder="Password"
        className="base-input"
        {...register("password")}
      />
      {isCreate ? (
        <input
          type="text"
          placeholder="LastName"
          className="base-input"
          {...register("lastName")}
        />
      ) : (
        <a
          href="#"
          className="text-end block text-sm tracking-wide text-blue-800"
        >
          Forgot password ?
        </a>
      )}
      <button className="base-btn main-btn w-full">
        {isCreate ? "Create Account" : "Login"}
      </button>
      <a
        href="#"
        className="block text-sm tracking-wide text-blue-800"
        onClick={() => setIsCreate((prev) => !prev)}
      >
        {isCreate ? "Already have an account" : "Create new Account"}
      </a>
    </form>
  );
}
