/*eslint-disable*/

import { useEffect } from "react";
import { CreateFormHeader, CreateFormBody } from "./components";
import { useNavigate, useParams } from "react-router-dom";
import { formsProvider } from "../../../providers/formsProvider";
import { useCreateFormStore, useDashboardState } from "../../../stores";
import { useNotify } from "../../../hooks";

export function FormEdit() {
  const params = useParams();
  const notify = useNotify((state) => state.setNotify);
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useDashboardState();
  const setAll = useCreateFormStore((state) => state.setAll);
  const formId = params.formId;

  useEffect(() => {
    setIsLoading(true);
    const getFormById = async () => {
      formsProvider
        .getFormById(formId)
        .then((form) => {
          const config = { ...form };
          delete config.questions;
          const newStore = { config, questions: form.questions || [] };
          setAll(newStore);
        })
        .catch(() => {
          notify("Oops, form not found or something went wrong", {
            color: "red",
          });
          navigate("/dashboard");
        })
        .finally(() => setIsLoading(false));
    };
    getFormById();
  }, [formId, notify, navigate]);

  if (isLoading) return null;

  return (
    <div className="w-full mx-auto max-w-[900px]">
      <CreateFormHeader />
      <CreateFormBody />
    </div>
  );
}
