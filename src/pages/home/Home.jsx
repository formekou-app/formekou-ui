import { Button, IconButton, Typography } from "@material-tailwind/react";
import { PersonAdd as PersonAddIcon, MoreHoriz as MoreIcon } from "@mui/icons-material";
import { Navbar } from "../../components";
import { Menu } from "../../components/menu";

export function Home() {
  return (
    <div className="section">
      <Navbar />
      <Menu />
      <div
        style={{ width: "calc(100% - 275px)" }}
        className="ml-[275px] mt-[50px]"
      >
        <div className="flex gap-5 w-full p-5 items-center">
          <Typography className="text-[15px] pr-3 border-r-[1px] border-r-gray-300">
            Default
          </Typography>
          <PersonAddIcon className="text-bgray" />
          <Typography variant="small">
            Share
          </Typography>
          <IconButton variant="text" size="sm">
            <MoreIcon className="text-bgray cursor-pointer" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
