import { Typography, IconButton } from "@material-tailwind/react";
import {
  Sort as SortIcon,
  Apps as AppIcon,
  PersonAdd as PersonAddIcon,
  MoreHoriz as MoreIcon,
} from "@mui/icons-material";

import { FormCreateModal } from "./create/FormCreateModal";
import { List } from "../../ui";
import { useState } from "react";

function ListViewButton({ isActive, icon, onClick, label }) {
  return (
    <button
      size="sm"
      className="px-3 flex items-center py-1 bg-gray-500 gap-1"
      style={{
        backgroundColor: isActive ? "#75726b" : "#d9d4d0",
        color: isActive ? "white" : "black"
      }}
      onClick={onClick}
    >
      {icon}
      <Typography variant="small" className="text-inherit text-[14px]">
        {label}
      </Typography>
    </button>
  )
}


export function FormList() {
  const [isGridView, setIsGridView] = useState(false);

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
      <div className="flex items-center justify-between">
        <FormCreateModal />
        <div className="flex items-center">
          <ListViewButton
            onClick={() => setIsGridView(false)}
            icon={<SortIcon />}
            label="List"
            isActive={!isGridView}
          />
          <ListViewButton
            onClick={() => setIsGridView(true)}
            icon={<AppIcon />}
            label="Grid"
            isActive={isGridView}
          />
        </div>
      </div>
      <List>
      </List>
    </div>
  );
}
