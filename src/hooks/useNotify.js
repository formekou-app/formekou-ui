import { useNotifyStore } from "../stores";

export function useNotify() {
  const { config, setNotify } = useNotifyStore();

  const clearNotification = async () => {
    setTimeout(() => {
      setNotify("", {});
    }, [config.duration]);
  };

  const notify = (message, updatedConfig = {}) => {
    setNotify(message, updatedConfig);
    clearNotification();
  };

  return notify;
}
