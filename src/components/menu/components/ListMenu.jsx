import { useState } from "react";
import PropTypes from "prop-types";
import { Typography, Collapse } from "@material-tailwind/react";
import { Add, ExpandLess, ExpandMore } from "@mui/icons-material";

export function ListMenu({ label, children }) {
  const [showMenuContent, setShowMenuContent] = useState(false);

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
        <Add className="py-[1px] bg-gray-300 rounded-[5px]" />
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
  children: PropTypes.object
};
