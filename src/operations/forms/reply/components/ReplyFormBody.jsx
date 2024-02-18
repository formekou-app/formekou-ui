import { createContext, useContext, useState } from "react";
import {
  Button,
  Typography,
  Input,
  Checkbox,
  Radio,
  Textarea,
} from "@material-tailwind/react";
import { v4 as uuid } from "uuid";

import { useNavigate } from "react-router-dom";
import { QuestionType } from "../../../../gen/client";
import { formsProvider } from "../../../../providers";
import { useNotify } from "../../../../hooks";
import { useDashboardState } from "../../../../stores";
import { dumbLoading } from "../../../utils";

/*eslint-disable*/

const FORM_ANSWER_CONTEXT = createContext();

function AnswerInput({ question }) {
  const { updateAnswer, updateMultipleResponse } =
    useContext(FORM_ANSWER_CONTEXT);

  if (question.type === QuestionType.Checkbox) {
    return !question.options
      ? null
      : question.options.map((option) => (
          <Checkbox
            key={option.id}
            onChange={({ target }) =>
              updateMultipleResponse(question.id, option.value, target.checked)
            }
            name={question.id}
            label={option.value}
          />
        ));
  }

  if (question.type === QuestionType.Radio) {
    return !question.options
      ? null
      : question.options.map((option) => (
          <Radio
            required={question.isRequired}
            key={option.id}
            onChange={() => updateAnswer(question.id, option.value)}
            name={question.id}
            label={option.value}
          />
        ));
  }

  if (question.type === QuestionType.Paragraph) {
    return (
      <Textarea
        variant="outlined"
        label="Your answer"
        required={question.isRequired}
        onChange={({ target }) => updateAnswer(question.id, target.value)}
      />
    );
  }

  return (
    <Input
      type="text"
      label="Your answer"
      required={question.isRequired}
      onChange={({ target }) => updateAnswer(question.id, target.value)}
    />
  );
}

function AnswerItem({ question }) {
  return (
    <div className="form-block flex flex-col items-start gap-2">
      <Typography className="text-[14px] text-bgray font-semibold">
        {question.isRequired && <span className="text-red-300 mr-2">/!\</span>}
        {question.title}
      </Typography>
      {question.description && question.description.length > 0 && (
        <Typography className="text-[14px] text-bgray">
          {question.description}
        </Typography>
      )}
      <AnswerInput question={question} />
    </div>
  );
}

export function ReplyFormBody({ questions, formId }) {
  const navigate = useNavigate();
  const notify = useNotify();
  const setIsLoading = useDashboardState((state) => state.setIsLoading);
  const [answerValue, setAnswerValue] = useState(
    questions.map((question) => ({
      id: uuid(),
      value: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      questionId: question.id,
    }))
  );

  const submitAnswer = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    formsProvider
      .saveAnswers(answerValue)
      .then(() => navigate(`/dashboard/${formId}/success`))
      .catch((error) => {
        notify("Oops, an error occurred");
        console.log(error);
      })
      .finally(() => dumbLoading(() => setIsLoading(false)));
  };

  const updateAnswer = (id, value) => {
    setAnswerValue((prev) => {
      return [...prev].map((answer) =>
        answer.questionId === id ? { ...answer, value } : answer
      );
    });
  };

  const updateMultipleResponse = (id, value, state) => {
    setAnswerValue((prev) => {
      return [...prev].map((answer) => {
        if (answer.questionId !== id) return answer;
        const responses = answer.value.split("---");

        if (state) {
          return {
            ...answer,
            value: [...responses, value]
              .filter((el) => el.length > 0)
              .join("---"),
          };
        }

        return {
          ...answer,
          value: responses.filter((response) => response !== value).join("---"),
        };
      });
    });
  };

  return (
    <div className="my-5 w-full">
      <FORM_ANSWER_CONTEXT.Provider
        value={{ updateAnswer, updateMultipleResponse }}
      >
        <form className="w-full" onSubmit={submitAnswer}>
          {questions.map((question) => (
            <AnswerItem key={question.id} question={question} />
          ))}
          <Button size="sm" className="ml-auto block mt-5" type="submit">
            Submit
          </Button>
        </form>
      </FORM_ANSWER_CONTEXT.Provider>
    </div>
  );
}
