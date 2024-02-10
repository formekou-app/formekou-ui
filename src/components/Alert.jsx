import PropTypes from "prop-types";
import { Alert as _Alert } from "@material-tailwind/react";

import { DEFAULT_CONFIG } from "../hooks";

export function Alert({ notifyConfig = DEFAULT_CONFIG }) {
  return (
    <_Alert
      open={notifyConfig.message !== ""}
      animate={{
        mount: { y: 0 },
        unmount: { y: -100 },
      }}
      variant={notifyConfig.config.variant}
      color={notifyConfig.config.color}
      className="fixed top-5 right-10 min-w-[350px] w-fit"
    >
      {notifyConfig.message}
    </_Alert>
  );
}

Alert.propTypes = {
  notifyConfig: PropTypes.object,
};
