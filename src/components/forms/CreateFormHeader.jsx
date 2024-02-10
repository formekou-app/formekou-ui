import { Input, Textarea, Switch } from "@material-tailwind/react";
import { useCreateForm } from "../../hooks/useCreateForm";
import { CollapseConfig } from "./CollapseConfig";

export function CreateFormHeader() {
  const { config, questions, updateConfig } = useCreateForm();

  const updateConfigByName = ({ target }) => {
    const { name, value } = target;
    updateConfig(name, value);
  };

  return (
    <div
      className="border-t-[10px] form-block"
      style={{ borderTopColor: config.color }}
    >
      <Input
        name="title"
        variant="static"
        type="text"
        placeholder="Title"
        className="form-input text-xl"
        required={true}
        value={config.title}
        onChange={updateConfigByName}
      />
      <Textarea
        variant="static"
        name="description"
        placeholder="Description"
        className="form-input focus:border-none"
        value={config.description}
        onChange={updateConfigByName}
      />
      <p className="text-gray-800 mt-5">
        Number of questions: {questions.length}
      </p>
      <CollapseConfig title="More configuration">
        <Switch
          label="Private"
          value={config.isPrivate}
          onChange={({ target }) => updateConfig("isPrivate", target.value)}
        />
        <Input
          type="color"
          name="color"
          label="Main color"
          value={config.color}
          onChange={updateConfigByName}
        />
        <div className="flex items-end mb-5 gap-5 w-full">
          <Input label="Open" name="open" type="datetime-local" />
          <Input label="Close" type="datetime-local" name="close" />
        </div>
      </CollapseConfig>
    </div>
  );
}
