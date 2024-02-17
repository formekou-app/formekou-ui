import React, { useState } from "react";
import { Button } from "@material-tailwind/react";

const camelize = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};

export function ReplyFormBody() {
  const [formContent, setFormContent] = useState([
    {
      id: 0,
      name: "0",
      label: "what is your name ?",
      required: false,
      question_type: "short_answer",
      list: [],
    },
    {
      id: 1,
      name: "1",
      label: "Describe yourself ?",
      required: false,
      question_type: "paragraph",
      list: [],
    },
    {
      id: 3,
      name: "3",
      label: "Select your hobbies",
      required: false,
      question_type: "checkbox",
      list: ["Reading", "Gardening", "Cooking"],
    },
    {
      id: 4,
      name: "4",
      label: "Select your preferred payment method",
      required: false,
      question_type: "radio",
      list: ["Credit Card", "PayPal", "Bitcoin"],
    },
  ]);

  const submitForm = (e) => {
    e.preventDefault();

    //loop through our questions & get values based on the element name
    const formTargets = e.target;
    let data = [];
    formContent.map((content) => {
      const element = camelize(content.label);
      if (content.question_type === "checkbox") {
        const checkboxes = formTargets[element];
        const selectedOptions = Array.from(checkboxes)
          .filter((checkbox) => checkbox.checked)
          .map((checkbox) => checkbox.value);
        data.push({
          question: content.label,
          answer: selectedOptions,
        });
      } else {
        data.push({
          question: content.label,
          answer: formTargets[element].value,
        });
      }
    });

    console.log("form data", data);
  };

  return (
    <form
      onSubmit={submitForm}
      className="reply-block"
    >
      {formContent.map((field) => (
        <div
          key={field.id}
          className="reply-field"
        >
          <div className="reply-field-item">
            <div
              key={field.name}
              className="reply-text text-black-700"
            >
              <label onClick={() => setOnEdit(true)}>{field.label}</label>
            </div>
          </div>

          <div className="my-4">
            {field.question_type === "short_answer" && (
              <input
                type="text"
                className="reply-input"
                placeholder={field.label}
                name={camelize(field.label)}
              />
            )}
            {field.question_type === "paragraph" && (
              <input
                className="reply-input"
                placeholder={field.label}
                name={camelize(field.label)}
              />
            )}

            {field.question_type === "checkbox" && (
              <>
                {field.list.map((option) => (
                  <div key={option}>
                    <input
                      type="checkbox"
                      id={camelize(option)}
                      name={camelize(field.label)}
                      value={option}
                    />
                    <label className="px-5" htmlFor={camelize(option)}>
                      {option}
                    </label>
                  </div>
                ))}
              </>
            )}
            {field.question_type === "radio" && (
              <>
                {field.list.map((option) => (
                  <div key={option}>
                    <input
                      type="radio"
                      id={camelize(option)}
                      name={camelize(field.label)}
                      value={option}
                    />
                    <label className="px-5" htmlFor={camelize(option)}>
                      {option}
                    </label>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      ))}

      <div className="flex mt-5 w-full gap-3 justify-end items-center">
        <Button size="sm" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}
