import React from "react";
import {
  IconButton,
  Button,
  Switch,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import {
  Delete as DeleteIcon,
  FileCopy as CopyIcon,
} from "@mui/icons-material";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";

import { QUESTION_TYPES } from "./utils";
import { QOption } from "./QOption";
import { useCreateFormStore } from "../../../../stores";

export const Question = React.memo(({ questionIndex }) => {
  const {
    question,
    deleteQuestion,
    updateQuestion,
    duplicateQuestion,
    addQuestionOption,
  } = useCreateFormStore((state) => ({
    question: state.questions.at(questionIndex),
    deleteQuestion: state.deleteQuestion,
    updateQuestion: state.updateQuestion,
    duplicateQuestion: state.duplicateQuestion,
    addQuestionOption: state.addQuestionOption,
  }));

  const updateQuestionByName = ({ target }) => {
    updateQuestion(question.id, target.name, target.value);
  };

  const createNewOption = () => {
    addQuestionOption(question.id, {
      id: uuid(),
      value: "My Option",
      isCorrect: false,
      points: 1,
    });
  };

  return (
    <div className="form-block">
      <div className="flex gap-5 my-5">
        <div style={{ width: "calc(100% - 250px)" }}>
          <Input
            required
            type="text"
            name="title"
            label="Question title"
            value={question.title}
            onChange={updateQuestionByName}
          />
        </div>
        <div className="w-[150px]">
          <Select
            name="type"
            label="Question type"
            value={question.type}
            onChange={(value) => updateQuestion(question.id, "type", value)}
          >
            {QUESTION_TYPES.map((qtype) => (
              <Option key={qtype.value} value={qtype.value}>
                {qtype.label}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      {(question.type === "RADIO" || question.type === "CHECKBOX") && (
        <>
          {question.options.map((option) => (
            <QOption key={option.id} questionId={question.id} option={option} />
          ))}
          <Button
            variant="outlined"
            className="my-5"
            color="blue-gray"
            size="sm"
            onClick={createNewOption}
          >
            Add Option
          </Button>
        </>
      )}
      <div className="flex gap-10 items-start w-full">
        <Switch
          checked={question.isRequired}
          onChange={({ target }) =>
            updateQuestion(question.id, "isRequired", target.checked)
          }
          label="Required"
        />
        <IconButton
          variant="text"
          size="sm"
          color="gray"
          className="opacity-[.7]"
          onClick={() => deleteQuestion(question.id)}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          variant="text"
          size="sm"
          color="gray"
          className="opacity-[.7]"
          onClick={() => duplicateQuestion(question.id)}
        >
          <CopyIcon />
        </IconButton>
      </div>
    </div>
  );
});

Question.displayName = "Question";

Question.propTypes = {
  questionIndex: PropTypes.number,
};
