import { Button } from "@material-tailwind/react";
import { v4 as uuid } from "uuid";
import { Question } from "./Question";
import { useShallowCreateForm } from "../../stores";

export function CreateFormBody() {
  const {questions, addQuestion} = useShallowCreateForm(state => ({questions: state.questions, addQuestion: state.addQuestion}));

  const saveForm = () => {
    // console.log({ config, questions });
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
