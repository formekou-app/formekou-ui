import { Input, IconButton } from "@material-tailwind/react";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { useCreateFormStore } from "../../stores";

/*eslint-disable*/
export function QOption({ questionId, option }) {
  const { updateQuestionOption, deleteQuestionOption } = useCreateFormStore();

  return (
    <div className="flex items-center gap-5">
      <div className="mb-3 w-[250px]">
        <Input
          label="Option"
          values={option.value}
          onChange={({ target }) =>
            updateQuestionOption(questionId, option.id, target.value)
          }
        />
      </div>
      <IconButton
        color="gray"
        className="opacity-[.7]"
        variant="text"
        onClick={() => deleteQuestionOption(questionId, option.id)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
