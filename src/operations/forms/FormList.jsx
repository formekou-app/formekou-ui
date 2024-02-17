import { Typography, IconButton } from "@material-tailwind/react";
import {
  PersonAdd as PersonAddIcon,
  MoreHoriz as MoreIcon,
} from "@mui/icons-material";

import { FormCreateModal } from "./create/FormCreateModal";

export function FormList() {
  return (
    <div className="w-full">
      <div className="flex gap-5 w-full mb-3 items-center">
        <Typography className="text-[15px] pr-3 border-r-[1px] border-r-gray-300">
          Default
        </Typography>
        <PersonAddIcon className="text-bgray" />
        <Typography variant="small">Share</Typography>
        <IconButton variant="text" size="sm">
          <MoreIcon className="text-bgray cursor-pointer" />
        </IconButton>
      </div>
      <FormCreateModal />
    </div>
  );
}
