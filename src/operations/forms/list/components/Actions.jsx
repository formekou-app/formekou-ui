import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  IconButton,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { MoreHoriz } from "@mui/icons-material";

import { LIST_CONTEXT } from "./List";

import { formsProvider } from "../../../../providers";
import { useNotify } from "../../../../hooks";
import { dumbLoading } from "../../../utils";

import PropTypes from "prop-types";

export function Actions({ formId }) {
  const navigate = useNavigate();
  const { setIsLoading, fetchForms } = useContext(LIST_CONTEXT);
  const notify = useNotify();

  const copyLink = () => {
    const url = `${window.location.origin}/dashboard/forms/${formId}/reply`;
    navigator.clipboard.writeText(url);
    notify("Link copied", { color: "green" });
  };

  const doDelete = async () => {
    setIsLoading(true);
    formsProvider
      .deleteFormById(formId)
      .then(() => {
        notify("Forms deleted", { color: "green" });
      })
      .catch(() => {
        notify("Oops, error occured when try to delete the form", {
          color: "red",
        });
      })
      .finally(() => {
        dumbLoading(() => fetchForms());
      });
  };

  return (
    <Popover placement="left-start">
      <PopoverHandler>
        <IconButton variant="text" className="text-bgray">
          <MoreHoriz />
        </IconButton>
      </PopoverHandler>
      <PopoverContent className="p-0 w-[150px]">
        <Button
          size="sm"
          variant="text"
          className="py-3 w-full block"
          onClick={() => navigate(`/dashboard/forms/${formId}/answers`)}
        >
          All responses
        </Button>
        <Button
          size="sm"
          variant="text"
          className="py-3 w-full block"
          onClick={copyLink}
        >
          CopyLink
        </Button>
        <Button
          size="sm"
          variant="text"
          className="py-3 w-full block"
          onClick={() => navigate(`/dashboard/forms/${formId}/edit`)}
        >
          Edit
        </Button>
        <Button
          size="sm"
          color="red"
          variant="text"
          className="block w-full py-3"
          onClick={doDelete}
        >
          Delete
        </Button>
      </PopoverContent>
    </Popover>
  );
}

Actions.propTypes = {
  formId: PropTypes.string,
};
