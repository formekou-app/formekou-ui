import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReplyFormHeader, ReplyFormBody } from "./components";
import { useNotify } from "../../../hooks";
import { useDashboardState } from "../../../stores";
import { formsProvider } from "../../../providers";
import { dumbLoading } from "../../utils";

export function FormReply() {
  const [form, setForms] = useState(null);
  const { formId } = useParams();
  const notify = useNotify((state) => state.setNotify);
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useDashboardState();

  useEffect(() => {
    setIsLoading(true);
    const getFormById = async () => {
      formsProvider
        .getFormById(formId)
        .then((formResponse) => {
          setForms(formResponse)
        })
        .catch(() => {
          notify("Oops, form not found or something went wrong", {
            color: "red",
          });
          navigate("/dashboard");
        })
        .finally(() => dumbLoading(() => setIsLoading(false)));
    };
    getFormById();
  }, [formId]);

  if (isLoading || form === null) return null;

  return (
    <div className="w-full mx-auto max-w-[900px]">
      <ReplyFormHeader form={form} />
      <ReplyFormBody questions={form.questions || []} />
    </div>
  );
}
