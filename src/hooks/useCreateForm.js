import { useContext } from "react";
import { CREATE_FORM_CONTEXT } from "../context/FormCreateContext";

export function useCreateForm(){
  const {
    addQuestion, 
    removeQuestion, 
    duplicateQuestion, 
    getQuestion,
    updateQuestion,
    updateConfig,
    config,
    questions
  } = useContext(CREATE_FORM_CONTEXT);

  return {
    addQuestion, 
    removeQuestion, 
    duplicateQuestion, 
    getQuestion,
    updateQuestion,
    updateConfig,
    config,
    questions
  };
}
