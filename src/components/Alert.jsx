import { Alert as _Alert } from "@material-tailwind/react";
import { useNotifyStore } from "../stores";

export function Alert() {
  const {message, config} = useNotifyStore();
  
  return (
    <_Alert
      open={message !== ""}
      animate={{
        mount: { y: 0 },
        unmount: { y: -100 },
      }}
      variant={config.variant}
      color={config.color}
      className="fixed top-5 right-10 min-w-[350px] w-fit"
    >
      {message}
    </_Alert>
  );
}
