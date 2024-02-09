import { useState } from "react";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { DeleteOutlineOutlined, FileCopy } from "@mui/icons-material";

export function Form() {
  const [formContent, setFormContent] = useState([
    {
      id: 0,
      name: "0",
      label: "Untitled Question",
      required: false,
      question_type: "short_answer",
      list: [],
    },
  ]);
  const [title, setTitle] = useState("Untitled Form");
  const [description, setDescription] = useState("Form Description");
  const [onEdit, setOnEdit] = useState(false);
  const [textField, setTextField] = useState("");
  const [editedField, setEditedField] = useState("");

  const addQuestion = () => {
    const field = {
      id: formContent.length,
      name: `question_${formContent.length}`,
      label: "Untitled question",
      required: false,
      question_type: "short_answer",
      list: [],
    };
    setFormContent([...formContent, field]);
  };

  const editField = (fieldName, fieldLabel) => {
    const formFields = [...formContent];
    const fieldIndex = formFields.findIndex((f) => f.name === fieldName);
    if (fieldIndex > -1) {
      formFields[fieldIndex].label = fieldLabel;
      setFormContent(formFields);
    }
  };

  const editFieldType = (fieldName, fieldLabel) => {
    const formFields = [...formContent];
    const fieldIndex = formFields.findIndex((f) => f.name === fieldName);
    if (fieldIndex > -1) {
      formFields[fieldIndex].question_type = fieldLabel;
      setFormContent(formFields);
    }
  };

  const deleteField = (fieldId) => {
    setFormContent((prevFormContent) =>
      prevFormContent.filter((field) => field.id !== fieldId)
    );
  };

  const duplicateField = (fieldId) => {
    const fieldToDuplicate = formContent.find((field) => field.id === fieldId);
    const duplicatedField = {
      ...fieldToDuplicate,
      id: formContent.length,
    };
    setFormContent((prevFormContent) => [...prevFormContent, duplicatedField]);
  };

  const handleRequired = (fieldId) => {
    setFormContent((prevFormContent) =>
      prevFormContent.map((field) =>
        field.id === fieldId ? { ...field, required: !field.required } : field
      )
    );
  };

  const addFieldOption = (fieldName, option) => {
    const formFields = [...formContent];
    const fieldIndex = formFields.findIndex((f) => f.name === fieldName);
    if (fieldIndex > -1) {
      if (option && option !== "") {
        formFields[fieldIndex].list.push(option);
        setFormContent(formFields);
        setTextField("");
      }
    }
  };

  return (
    <div className="relative flex flex-col justify-start  items-center px-4 sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
      <div className="flex flex-col px-4 bg-white rounded-md justify-center item-start w-full shadow-sm border-indigo-800 border-t-8 space-y-2 md:h-auto">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-3xl font-semibold text-black outline-none border-none bg-transparent"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-black capitalize outline-none border-none bg-transparent"
        />
      </div>

      <div className="relative flex flex-col w-full space-y-4">
        {formContent.map((field) => {
          return (
            <div
              key={field.id}
              className="rounded-md bg-white flex w-full shadow-md px-4 form-field-container"
            >
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center space-y-2">
                  <div
                    key={field.name}
                    className="block text-sm font-medium text-black capitalize w-full sm:w-1/2"
                  >
                    {onEdit && editedField === field.name ? (
                      <input
                        type="text"
                        value={field.label}
                        onChange={(e) => editField(field.name, e.target.value)}
                        onBlur={() => {
                          setOnEdit(false);
                          setEditedField("");
                        }}
                        className="border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
                      />
                    ) : (
                      <label
                        className="border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
                        onClick={() => {
                          setOnEdit(true);
                          setEditedField(field.name);
                        }}
                      >
                        {field.label}
                      </label>
                    )}
                  </div>
                  <div className="mt-4">
                    <select
                      onChange={(e) =>
                        editFieldType(field.name, e.target.value)
                      }
                    >
                      <option value="short_answer">Short Answer</option>
                      <option value="paragraph">Paragraph</option>
                      <option value="multichoice">Multichoice</option>
                    </select>
                  </div>
                </div>

                <div className="my-4 w-full">
                  {field.question_type === "short_answer" && (
                    <input
                      type="text"
                      className="px-5 shadow-sm h-10 rounded-md block w-full"
                      placeholder={field.label}
                    />
                  )}
                  {field.question_type === "paragraph" && (
                    <textarea
                      rows={4}
                      className="px-5 shadow-sm h-10 rounded-md block w-full"
                      placeholder={field.label}
                    />
                  )}
                  {field.question_type === "multichoice" && (
                    <div className="my-4 flex flex-col space-y-2">
                      <select className="px-5 shadow-sm h-10 rounded-md block w-full">
                        {field.list.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <div className="flex space-between">
                        <input
                          type="text"
                          onChange={(e) => setTextField(e.target.value)}
                          value={textField}
                          placeholder="Add an option"
                          className="flex-1 text-black"
                        />
                        <button
                          className="bg-indigo-700 block hover:bg-indigo-900 text-white px-4"
                          onClick={() => addFieldOption(field.name, textField)}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    className="text-blue-500 hover:text-indigo-500"
                    onClick={() => duplicateField(field.id)}
                  >
                    <FileCopy />
                  </button>
                  <label className="text-sm text-black">Required</label>
                  <input
                    type="checkbox"
                    checked={field.required}
                    onChange={() => handleRequired(field.id)}
                  />
                  <button
                    className="text-blue-500 hover:text-indigo-500"
                    onClick={() => deleteField(field.id)}
                  >
                    <DeleteOutlineOutlined />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="sticky top-30 right-0 -mt-8 mr-4 flex flex-col items-center bg-white p-2 rounded-md shadow-md md:mt-4 md:mr-2 lg:mr-8 lg:mt-2">
          <button onClick={addQuestion}>
            <AddCircleOutlineOutlinedIcon className="w-8 h-8 text-gray-400 hover:text-indigo-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
