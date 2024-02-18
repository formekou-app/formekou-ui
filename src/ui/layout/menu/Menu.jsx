import { Home, Person, Search as SearchIcon } from "@mui/icons-material";
import { ListMenu, ListMenuItem } from "./components";
import { Link } from "react-router-dom";

//TODO: handle search here
export function Menu() {
  return (
    <div
      style={{ height: "calc(100vh - 50px)" }}
      className="py-5 flex flex-col justify-between px-2 w-[275px] bg-white fixed left-0 top-[50px]"
    >
      <div className="w-full">
        <div className="bg-gray-200 flex mb-5 px-2 py-1 rounded-[5px] items-start gap-2">
          <SearchIcon className="text-main-black" />
          <input
            type="text"
            className="text-[14px] text-main-black outline-none w-full bg-transparent"
            placeholder="Search Form"
          />
        </div>
        <Link
          to="/dashboard"
          className="text-bgray px-2 flex gap-2 text-[14px] items-center hover:bg-gray-200 py-3"
        >
          <Home className="text-bgray" />
          Go to dashboard
        </Link>
        <Link
          to="/dashboard/profile"
          className="text-bgray px-2 flex gap-2 text-[14px] items-center hover:bg-gray-200 py-3"
        >
          <Person className="text-bgray" />
          Go to profile
        </Link>
      </div>
      <ListMenu label="WORKSPACE" className="mt-auto">
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
