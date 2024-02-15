import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";
import { v4 as uuid } from "uuid";

export const useCreateFormStore = createWithEqualityFn((set) => {
  const pushUndoStack = (state) =>
    set((prevState) => ({
      ...prevState,
      undoStack: [...prevState.undoStack, state],
    }));

  const pushRedoStack = (state) =>
    set((prevState) => ({
      ...prevState,
      redoStack: [...prevState.redoStack, state],
    }));

  const updateConfig = (source, value) => {
    const prevConfig = useCreateFormStore.getState().config;

    pushUndoStack(prevConfig);

    set((state) => ({
      ...state,
      config: { ...state.config, [source]: value },
      redoStack: [],
    }));
  };

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

  const undo = () => {
    const { undoStack } = useCreateFormStore.getState();
    if (undoStack.length > 0) {
      const prevState = undoStack.pop();
      pushRedoStack(useCreateFormStore.getState().config);
      set((state) => ({
        ...state,
        config: prevState,
        undoStack: undoStack,
      }));
    }
  };

  const redo = () => {
    const { redoStack } = useCreateFormStore.getState();
    if (redoStack.length > 0) {
      const nextState = redoStack.pop();
      pushUndoStack(useCreateFormStore.getState().config);
      set((state) => ({
        ...state,
        config: nextState,
        redoStack: redoStack,
      }));
    }
  };

  return {
    config: {
      title: "Untitled Form",
      description: "",
      color: "#666769",
      open: new Date().toISOString(),
      close: "",
      isPrivate: false,
    },
    questions: [],
    undoStack: [],
    redoStack: [],
    updateConfig,
    updateQuestion,
    getQuestion,
    addQuestion,
    duplicateQuestion,
    deleteQuestion,
    updateQuestionOption,
    deleteQuestionOption,
    addQuestionOption,
    undo,
    redo,
  };
}, shallow);
