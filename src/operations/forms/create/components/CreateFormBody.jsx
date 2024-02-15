import { Button } from "@material-tailwind/react";
import { v4 as uuid } from "uuid";
import { Question } from "./Question";
import { useCreateFormStore } from "../../../../stores";

// to avoid multiple rendering
function SaveButton() {
  const formToCreate = useCreateFormStore((state) => ({
    config: state.config,
    questions: state.questions,
  }));

  const saveForm = () => {
    console.log(formToCreate);
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
      label: "What is your Question label ?",
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
