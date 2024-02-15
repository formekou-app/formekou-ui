import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function ListMenuItem({ name, value, style }) {
  const location = useLocation();

  const isActive = location.pathname.includes(name);

  return (
    <div
      className="flex items-center justify-between p-2"
      style={{
        backgroundColor: !isActive ? "#e1e1e6" : "white",
        ...style,
      }}
      onClick={() => {}}
    >
      <Typography className="text-[14px] text-bgray">{name}</Typography>
      <Typography className="text-[14px] text-bgray">{value}</Typography>
    </div>
  );
}

ListMenuItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  style: PropTypes.object,
};
