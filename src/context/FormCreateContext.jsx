import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

/*eslint-disable*/
export const CREATE_FORM_CONTEXT = createContext();

const DEFAULT_FORM_VALUE = {
  config: {
    title: "Untitled Form",
    description: "",
    color: "#537ac9",
    open: new Date().toLocaleTimeString(),
    close: "",
    isPrivate: false,
  },
  questions: [],
};

//TODO: migrate to zustand
export function CreateFormProvider({ children }) {
  const [formCreate, setFormCreate] = useState(DEFAULT_FORM_VALUE);

  const updateConfig = (source, value) => {
    setFormCreate((prev) => ({
      ...prev,
      config: { ...prev.config, [source]: value },
    }));
  };

  const updateQuestion = (id, source, value) => {
    setFormCreate((prev) => ({
      ...prev,
      questions: [...prev.questions].map((question) =>
        question.id === id ? { ...question, [source]: value } : question
      ),
    }));
  };

  const getQuestion = (id) => {
    const question = formCreate.questions.find(
      (question) => question.id === id
    );
    if (!question)
      throw new Error("Question with id = " + id + " was not found");
    return question;
  };

  const addQuestion = (newQuestion) => {
    setFormCreate((prev) => ({
      ...prev,
      questions: [...prev.questions, newQuestion],
    }));
  };

  const duplicateQuestion = (id) =>
    addQuestion({ ...getQuestion(id), id: uuid() });

  const deleteQuestion = (id) => {
    setFormCreate((prev) => {
      return {
        ...prev,
        questions: [...prev.questions].filter((question) => question.id !== id),
      };
    });
  };

  const updateQuestionOption = (questionId, optionId, value) => {
    const question = getQuestion(questionId);
    updateQuestion(
      question.id,
      "options",
      question.options.map((option) => {
        return option.id === optionId ? { ...option, value } : option;
      })
    );
  };

  const deleteQuestionOption = (questionId, optionId) => {
    const question = getQuestion(questionId);
    updateQuestion(
      question.id,
      "options",
      question.options.filter((option) => option.id !== optionId)
    );
  };

  const addQuestionOption = (questionId, option) => {
    const question = getQuestion(questionId);
    updateQuestion(question.id, "options", [...question.options, option]);
  };

  return (
    <CREATE_FORM_CONTEXT.Provider
      value={{
        addQuestion,
        duplicateQuestion,
        deleteQuestion,
        getQuestion,
        updateQuestion,
        deleteQuestionOption,
        updateQuestionOption,
        addQuestionOption,
        updateConfig,
        config: formCreate.config,
        questions: formCreate.questions,
        createValue: formCreate,
      }}
    >
      {children}
    </CREATE_FORM_CONTEXT.Provider>
  );
}
