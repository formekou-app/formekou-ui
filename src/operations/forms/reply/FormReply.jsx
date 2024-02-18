import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReplyFormHeader, ReplyFormBody } from "./components";
import { useNotify } from "../../../hooks";
import { useDashboardState } from "../../../stores";
import { formsProvider } from "../../../providers";
import { dumbLoading } from "../../utils";

/*eslint-disable*/
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
          setForms(formResponse);
        })
        .catch(() => {
          notify("Oops, form not found or something went wrong", {
            color: "red",
          });
          navigate("/dashboard");
        })
        .finally(() => dumbLoading(() => setIsLoading(false)));
    };

    const testIfCanReply = async () => {
      formsProvider
        .canIReply(formId)
        .then((data) => {
          if (!data) {
            navigate("/dashboard/error/multiple");
            dumbLoading(() => setIsLoading(false));
          } else {
            getFormById();
          }
        })
        .catch(async () => {
          navigate("/dashboard/error/multiple");
          dumbLoading(() => setIsLoading(false));
        });
    };

    testIfCanReply();
  }, [formId]);

  if (isLoading || form === null) return null;

  return (
    <div className="w-full mx-auto max-w-[900px]">
      <ReplyFormHeader form={form} />
      <ReplyFormBody questions={form.questions || []} formId={form.id} />
    </div>
  );
}
