import { Button, Input } from "@material-tailwind/react";

import { useCreateFormStore } from "../../stores";

import { Star, Undo, Redo, MoreVert } from "@mui/icons-material";

import Logo from "../../assets/images/logo.png";

export function NavBar() {
  const { config, updateConfig, undo, redo } = useCreateFormStore((state) => ({
    config: state.config,
    updateConfig: state.updateConfig,
    undo: state.undo,
    redo: state.redo,
  }));

  const updateTitle = (e) => {
    updateConfig("title", e.target.value);
  };
  return (
    <div className=" w-full flex flex-col justify-between">
      <div className="flex items-center justify-between py-5 bg-white border-b border-white-300">
        <div className="flex items-center ml-4">
          <div className="mr-4 text-blue-500">
            <img src={Logo} className="w-20" alt="formekou logo" />
          </div>
          <Input
            type="text"
            className="text-xl font-bold text-gray-800 outline-none border-none"
            value={config.title}
            onChange={updateTitle}
          />
          <div className="ml-4 text-gray-500">
            <Star style={{ fontSize: 24 }} />
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-4 text-gray-500" onClick={undo}>
            <Undo style={{ fontSize: 24 }} />
          </div>
          <div className="mr-4 text-gray-500" onClick={redo}>
            <Redo style={{ fontSize: 24 }} />
          </div>
          <div className="mr-4 text-gray-500">
            <MoreVert style={{ fontSize: 24 }} />
          </div>
          <div className="mr-4">
            <Button
              variant="filled"
              className="text-white px-6 py-3 rounded"
              color="blue"
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
