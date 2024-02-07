import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@material-tailwind/react";
import { Email, Lock, Person } from "@mui/icons-material";

import { useAuth } from "../../security/hooks";
import { postSignup } from "../../security/authProvider";
import { Link } from "react-router-dom";

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
      <Input
        type="email"
        name="Email"
        label="Email"
        size="lg"
        icon={<Email />}
        {...register("email")}
      />
      <Input
        type="password"
        label="Password"
        size="lg"
        icon={<Lock />}
        {...register("password")}
      />
      {isCreate ? (
        <Input
          icon={<Person />}
          type="text"
          size="lg"
          label="Lastname"
          {...register("lastName")}
        />
      ) : (
        <Link
          to={"#"}
          className="text-end block text-sm tracking-wide text-blue-800"
        >
          Forgot password ?
        </Link>
      )}
      <button className="base-btn main-btn w-full">
        {isCreate ? "Create Account" : "Login"}
      </button>
      <Link
        href="#"
        className="block text-sm tracking-wide text-blue-800"
        onClick={() => setIsCreate((prev) => !prev)}
      >
        {isCreate ? "Already have an account" : "Create new Account"}
      </Link>
    </form>
  );
}
