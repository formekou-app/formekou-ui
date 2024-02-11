import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";
import { v4 as uuid } from "uuid";

export const useCreateFormStore = createWithEqualityFn((set) => {
  const updateConfig = (source, value) =>
    set((state) => ({
      ...state,
      config: { ...state.config, [source]: value },
    }));

  const updateQuestion = (questionId, source, value) =>
    set((state) => ({
      ...state,
      questions: state.questions.map((question) =>
        question.id === questionId ? { ...question, [source]: value } : question
      ),
    }));

  const getQuestion = (id) => {
    const question = useCreateFormStore
      .getState()
      .questions.find((question) => question.id === id);
    if (!question)
      throw new Error("Question with id = " + id + " was not found");
    return question;
  };

  const addQuestion = (newQuestion) =>
    set((state) => ({
      ...state,
      questions: [...state.questions, newQuestion],
    }));

  const duplicateQuestion = (id) =>
    useCreateFormStore.getState().addQuestion({
      ...useCreateFormStore.getState().getQuestion(id),
      id: uuid(),
    });

  const deleteQuestion = (id) =>
    set((state) => ({
      ...state,
      questions: state.questions.filter((question) => question.id !== id),
    }));

  const updateQuestionOption = (questionId, optionId, value) => {
    const question = useCreateFormStore.getState().getQuestion(questionId);
    useCreateFormStore.getState().updateQuestion(
      question.id,
      "options",
      question.options.map((option) =>
        option.id === optionId ? { ...option, value } : option
      )
    );
  };

  const deleteQuestionOption = (questionId, optionId) => {
    const question = useCreateFormStore.getState().getQuestion(questionId);
    useCreateFormStore.getState().updateQuestion(
      question.id,
      "options",
      question.options.filter((option) => option.id !== optionId)
    );
  };

  const addQuestionOption = (questionId, option) => {
    const question = useCreateFormStore.getState().getQuestion(questionId);
    useCreateFormStore
      .getState()
      .updateQuestion(question.id, "options", [...question.options, option]);
  };

  return {
    config: {
      title: "Untitled Form",
      description: "",
      color: "#537ac9",
      open: new Date().toISOString(),
      close: "",
      isPrivate: false,
    },
    questions: [],
    updateConfig,
    updateQuestion,
    getQuestion,
    addQuestion,
    duplicateQuestion,
    deleteQuestion,
    updateQuestionOption,
    deleteQuestionOption,
    addQuestionOption,
  };
}, shallow);
