import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@material-tailwind/react";
import { Email, Lock, Person } from "@mui/icons-material";

import { Alert } from "../../components";

import { useNotify } from "../../hooks";
import { useAuth } from "../../security/hooks";

import { postSignup } from "../../security/authProvider";

export function ManualLoginForm() {
  const [isCreate, setIsCreate] = useState(false);
  const [notify, notifyConfig] = useNotify();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const authentification = useAuth();

  const loginManually = async ({ ...data }) => {
    setIsLoading(true);
    if (!isCreate) {
      try {
        delete data.lastName;
        await authentification.login(data);
      } catch (error) {
        notify("Oops, An error occured, please try again !!", { color: "red" });
      } finally {
        setIsLoading(false);
      }
      return;
    }

    try {
      await postSignup(data);
      setIsCreate(false);
      notify("Account created! You can now log in", { color: "green" });
    } catch (error) {
      notify("Oops, Signup failed, please try again !!", { color: "red" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        action="submit"
        className="space-y-6 py-6"
        onSubmit={handleSubmit(loginManually)}
      >
        <Input
          required
          type="email"
          name="Email"
          label="Email"
          size="lg"
          icon={<Email />}
          {...register("email")}
        />
        <Input
          required
          type="password"
          label="Password"
          size="lg"
          icon={<Lock />}
          {...register("password")}
        />
        {isCreate ? (
          <Input
            required
            icon={<Person />}
            type="text"
            size="lg"
            label="Lastname"
            {...register("lastName")}
          />
        ) : (
          <Button
            variant="text"
            size="sm"
            className="block ms-auto font-normal text-main"
          >
            Forgot password
          </Button>
        )}
        <Button
          loading={isLoading}
          type="submit"
          className="bg-main hover:bg-blue-600 w-full"
        >
          {isCreate ? "Create Account" : "Login"}
        </Button>
        <Button
          variant="text"
          size="sm"
          className="block font-normal text-main"
          onClick={() => setIsCreate((prev) => !prev)}
        >
          {isCreate ? "Already have an account" : "Create new Account"}
        </Button>
      </form>
      <Alert notifyConfig={notifyConfig} />
    </>
  );
}
