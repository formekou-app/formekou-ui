import { Button } from "@material-tailwind/react";
import { v4 as uuid } from "uuid";
import { Question } from "./Question";
import { useShallowCreateForm } from "../../stores";

// to avoid multiple rendering
function SaveButton() {
  const formToCreate = useShallowCreateForm((state) => ({
    config: state.config,
    questions: state.questions,
  }));

  const saveForm = () => {
    console.log(formToCreate);
  };

  return (
    <Button onClick={saveForm} variant="filled" color="blue">
      Save
    </Button>
  );
}

export function CreateFormBody() {
  const { numberOfQuestion, addQuestion } = useShallowCreateForm((state) => ({
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
      <div className="flex w-full justify-end gap-5 items-center">
        <Button
          variant="filled"
          color="deep-orange"
          onClick={createNewQuestion}
        >
          Add question
        </Button>
        <SaveButton />
      </div>
    </>
  );
}
