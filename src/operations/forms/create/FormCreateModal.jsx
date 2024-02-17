import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import {
  Button,
  Input,
  Dialog,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Add as AddIcon, Close as CloseIcon } from "@mui/icons-material";

import { DEFAULT_FORM_VALUE } from "../../../stores/useCreateFormStore";
import { useNotify } from "../../../hooks";
import { formsProvider } from "../../../providers/formsProvider";
import { useDashboardState } from "../../../stores";
import { dumbLoading } from "../../utils";

export function FormCreateModal() {
  const [showCreate, setShowCreate] = useState(false);
  const { register, handleSubmit } = useForm();
  const { isLoading, setIsLoading } = useDashboardState();
  const navigate = useNavigate();
  const notify = useNotify();

  const doCreateForm = async ({ title }) => {
    setShowCreate(false);
    setIsLoading(true);
    const formId = uuid();

    const newForm = {
      ...DEFAULT_FORM_VALUE,
      id: formId,
      title: title,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    formsProvider
      .crupdateForm(newForm)
      .then(() => navigate(`/dashboard/forms/${formId}/edit`))
      .catch(() =>
        notify("Oops, your form was not created,  please try again !", {
          color: "red",
        })
      )
      .finally(() => dumbLoading(() => setIsLoading(false)));
  };

  const closeModal = () => setShowCreate(false);

  if (isLoading) return null;

  return (
    <>
      <Button
        size="sm"
        color="black"
        className="flex gap-2 py-[5px]  items-center"
        onClick={() => setShowCreate(true)}
      >
        <AddIcon className="text-[13px]" />
        <Typography variant="small" className="text-[13px]">
          Create new form
        </Typography>
      </Button>
      <Dialog open={showCreate} className="max-w-[300px] p-5">
        <div className="w-full flex justify-between items-center mb-5">
          <Typography variant="h2" className="text-[16px] text-bgray">
            Create a form
          </Typography>
          <IconButton variant="text" size="sm" onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </div>
        <form onSubmit={handleSubmit(doCreateForm)}>
          <Input
            required
            type="text"
            label="Title"
            className="w-full"
            name="title"
            {...register("title")}
          />
          <div className="flex mt-5 w-full gap-3 justify-end items-center">
            <Button size="sm" variant="outlined" onClick={closeModal}>
              Cancel
            </Button>
            <Button size="sm" type="submit">
              Save
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
