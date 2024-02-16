import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { v4 as uuid } from "uuid";

import { Question } from "./Question";
import { useCreateFormStore, useDashboardState } from "../../../../stores";
import { formsProvider } from "../../../../providers/formsProvider";
import { useNotify } from "../../../../hooks";

// to avoid multiple rendering
function SaveButton() {
  const { formId } = useParams();
  const navigate = useNavigate();
  const notify = useNotify();
  const { setIsLoading } = useDashboardState();
  const { questions, config } = useCreateFormStore((state) => ({
    config: state.config,
    questions: state.questions,
  }));

  const saveForm = async () => {
    if (questions.length <= 0) {
      notify("Must add at least one question", { color: "red" });
      return;
    }

    setIsLoading(true);
    const updateQuestions = async () => {
      formsProvider
        .setFormQuestions(formId, questions)
        .then(() => {
          navigate("/dashboard");
        })
        .catch(() => {
          notify("Oops, cannot update the forms, please try again", {
            color: "red",
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    formsProvider
      .crupdateForm(config)
      .then(async () => updateQuestions())
      .catch(() => {
        notify("Oops, cannot update the forms, please try again", {
          color: "red",
        });
        setIsLoading(false);
      });
  };

  return (
    <Button onClick={saveForm} variant="filled" size="sm">
      Save
    </Button>
  );
}

export function CreateFormBody() {
  const { numberOfQuestion, addQuestion } = useCreateFormStore((state) => ({
    numberOfQuestion: state.questions.length,
    addQuestion: state.addQuestion,
  }));

  const createNewQuestion = () => {
    addQuestion({
      id: uuid(),
      title: "What is your Question label ?",
      type: "TEXT",
      isRequired: false,
      options: [],
    });
  };

  return (
    <>
      {Array.from({ length: numberOfQuestion }, (_, index) => (
        <Question key={uuid()} questionIndex={index} />
      ))}
      <div className="flex w-full justify-end gap-5 mb-5 items-center">
        <Button size="sm" variant="outlined" onClick={createNewQuestion}>
          Add question
        </Button>
        <SaveButton />
      </div>
    </>
  );
}
