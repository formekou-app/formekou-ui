import { Search as SearchIcon } from "@mui/icons-material";
import { ListMenu, ListMenuItem } from "./components";

//TODO: handle search here
export function Menu() {
  return (
    <div
      style={{ height: "calc(100vh - 50px)" }}
      className="py-5 px-2 w-[275px] bg-white fixed left-0 top-[50px]"
    >
      <div className="bg-gray-200 flex mb-5 px-2 py-1 rounded-[5px] items-start gap-2">
        <SearchIcon className="text-main-black" />
        <input
          type="text"
          className="text-[14px] text-main-black outline-none w-full bg-transparent"
          placeholder="Search Form"
        />
      </div>
      <ListMenu label="WORKSPACE">
        <ListMenuItem name="Study" value={55} />
        <ListMenuItem
          name="Work"
          value={5}
          style={{ backgroundColor: "white" }}
        />
      </ListMenu>
    </div>
  );
}
