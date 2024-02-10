import { useState } from "react";

export const DEFAULT_CONFIG = {
  message: "",
  config: {
    variant: "ghost",
    color: "gray",
    duration: 2500,
  },
};

export function useNotify() {
  const [notifyConfig, setNotifyConfig] = useState(DEFAULT_CONFIG);

  const clearNotification = async () => {
    setTimeout(() => {
      setNotifyConfig(DEFAULT_CONFIG);
    }, [notifyConfig.config.duration]);
  };

  const notify = (message, updatedConfig = {}) => {
    setNotifyConfig({
      message,
      config: { ...DEFAULT_CONFIG.config, ...updatedConfig },
    });
    clearNotification();
  };

  return [notify, notifyConfig];
}
