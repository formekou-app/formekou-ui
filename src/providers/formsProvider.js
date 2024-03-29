import { formsApi } from "./api";

export const formsProvider = {
  crupdateForm: async (form) => {
    return formsApi()
      .crupdateForm(form)
      .then((response) => response.data);
  },
  getFormById: async (id) => {
    return formsApi()
      .getFormById(id)
      .then((response) => response.data);
  },
  setFormQuestions: async (formId, questions) => {
    return formsApi()
      .crupdateFormQuestions(formId, questions)
      .then((response) => response.data);
  },
  getForms: async (sort) => {
    return formsApi()
      .getOwnForms(sort)
      .then((response) => response.data);
  },
  deleteFormById: async (formId) => {
    return formsApi()
      .deleteFormById(formId)
      .then((response) => response.data);
  },
  canIReply: async (formId) => {
    return formsApi()
      .canIReply(formId)
      .then((response) => response.data);
  },
  saveAnswers: async (answers) => {
    return formsApi()
      .saveAnswers(answers)
      .then((response) => response.data);
  },
  getFormAnswers: async (formId, sort) => {
    return formsApi()
      .getFormAnswers(formId, sort)
      .then((response) => response.data);
  },
};
