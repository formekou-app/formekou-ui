import { useContext } from "react";
import { CREATE_FORM_CONTEXT } from "../context/FormCreateContext";

export function useCreateForm() {
  const {
    addQuestion,
    deleteQuestion,
    duplicateQuestion,
    getQuestion,
    updateQuestion,
    updateConfig,
    addQuestionOption,
    updateQuestionOption,
    deleteQuestionOption,
    config,
    questions,
    createValue,
  } = useContext(CREATE_FORM_CONTEXT);

  return {
    addQuestion,
    deleteQuestion,
    duplicateQuestion,
    getQuestion,
    updateQuestion,
    updateConfig,
    addQuestionOption,
    updateQuestionOption,
    deleteQuestionOption,
    config,
    questions,
    createValue,
  };
}
