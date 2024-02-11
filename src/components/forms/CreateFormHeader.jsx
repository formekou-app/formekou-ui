import { Input, Textarea, Switch } from "@material-tailwind/react";
import { CollapseConfig } from "./CollapseConfig";
import { useShallowCreateForm } from "../../stores";

function NumberOfQuestion() {
  const numberOfQuestion = useShallowCreateForm(
    (state) => state.questions.length
  );
  return (
    <p className="text-gray-800 mt-5">
      Number of questions: {numberOfQuestion}
    </p>
  );
}

export function CreateFormHeader() {
  const { config, updateConfig } = useShallowCreateForm((state) => ({
    config: state.config,
    updateConfig: state.updateConfig,
  }));

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
      <NumberOfQuestion />
      <CollapseConfig title="More configuration">
        <Switch
          label="Private"
          value={config.isPrivate}
          onChange={({ target }) => updateConfig("isPrivate", target.checked)}
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
