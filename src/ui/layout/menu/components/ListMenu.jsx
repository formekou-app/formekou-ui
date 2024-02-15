import { useState } from "react";
import { Typography, Collapse, IconButton } from "@material-tailwind/react";
import { Add, ExpandLess, ExpandMore } from "@mui/icons-material";
import PropTypes from "prop-types";

export function ListMenu({ label, children }) {
  const [showMenuContent, setShowMenuContent] = useState(true);

  return (
    <div
      className="w-full bg-red cursor-pointer my-2"
      onClick={() => setShowMenuContent((prev) => !prev)}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          {showMenuContent ? (
            <ExpandLess className="text-main-black" />
          ) : (
            <ExpandMore className="text-main-black" />
          )}
          <Typography
            variant="small"
            className="text-bgray text-[13px] font-semibold"
          >
            {label}
          </Typography>
        </div>
        <IconButton variant="text" size="sm">
          <Add className="text-bgray" />
        </IconButton>
      </div>
      <Collapse
        open={showMenuContent}
        className="pt-3"

      >
        {children}
      </Collapse>
    </div>
  );
}

ListMenu.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any
};
