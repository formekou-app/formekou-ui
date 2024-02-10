import { Input, Textarea } from "@material-tailwind/react";
import { useCreateForm } from "../../hooks/useCreateForm";
import { CollapseConfig } from "./CollapseConfig";

export function FormHeader() {
  const { config, updateConfig } = useCreateForm();

  const updateConfigByName = ({ target }) => {
    const { name, value } = target;
    updateConfig(name, value);
  }

  return (
    <div 
      className="border-t-[10px] form-block p-5"
      style={{borderTopColor: config.color}}
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
      <CollapseConfig title="More configuration">
        <div className="flex items-end mb-5 gap-5 w-full">
          <Input 
            label="Open" 
            name="open"
            type="datetime-local" 
          />
          <Input 
            label="Close"
            type="datetime-local" 
            name="close"
          />
        </div>
        <Input 
          type="color"
          name="color"
          label="Color"
          value={config.color}
          onChange={updateConfigByName}
        />
      </CollapseConfig>
    </div>
  )
}
