import { Button } from "@material-tailwind/react";
import { v4 as uuid } from "uuid";
import { useCreateForm } from "../../hooks/useCreateForm";
import { Question } from "./Question";

export function CreateFormBody() {
  const { questions, addQuestion, createValue } = useCreateForm();

  const saveForm = () => {
    console.log(createValue);
  };

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
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
      <div className="flex w-full justify-end gap-5 items-center">
        <Button
          variant="filled"
          color="deep-orange"
          onClick={createNewQuestion}
        >
          Add question
        </Button>
        <Button onClick={saveForm} variant="filled" color="blue">
          Save
        </Button>
      </div>
    </>
  );
}
