import { Button } from "@mui/material";
import { useCreateForm } from "../../hooks/useCreateForm"
import { Question } from "./Question";

export function CreateFormBody() {
  const { questions } = useCreateForm();

  return (
    <>
      {
        questions.legth > 0 &&
        <div className="form-block">
          {questions.map(question => <Question key={question.id} question={question} />)}
        </div>
      }
      <div className="flex w-full justify-end gap-5 items-center">
        <Button variant="contained" color="warning">
          Add question
        </Button>
        <Button variant="contained" size="medium">
          Save
        </Button>
      </div>
    </>
  )
}
