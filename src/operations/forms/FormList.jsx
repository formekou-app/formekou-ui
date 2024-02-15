import { Typography, IconButton, Button } from "@material-tailwind/react";
import {
  PersonAdd as PersonAddIcon,
  MoreHoriz as MoreIcon,
  Add as AddIcon,
} from "@mui/icons-material";

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
      <Button
        size="sm"
        color="black"
        className="flex gap-2 py-[5px]  items-center"
      >
        <AddIcon className="text-[13px]" />
        <Typography variant="small" className="text-[13px]">
          Create new form
        </Typography>
      </Button>
    </div>
  );
}
