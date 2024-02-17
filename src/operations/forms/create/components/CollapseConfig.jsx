import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse } from "@material-tailwind/react";

/*eslint-disable*/
export function CollapseConfig({ title, children }) {
  const [showConfig, setShowConfig] = useState(false);

  return (
    <>
      <div
        className="mt-1 gap-3 items-center cursor-pointer flex justify-end"
        onClick={() => setShowConfig((prev) => !prev)}
      >
        <h3 className="text-gray-800 text-[14px]">{title}</h3>
        {showConfig ? <ExpandLess /> : <ExpandMore />}
      </div>
      <Collapse open={showConfig}>
        <div className="flex flex-col px-2 gap-5 mt-5 w-full">{children}</div>
      </Collapse>
    </>
  );
}
