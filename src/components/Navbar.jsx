import { Feed, AccountCircle } from "@mui/icons-material";

export function Navbar() {
  return (
    <div className="w-full flex items-center justify-between h-[60px] px-[10px] bg-white fixed top-0 left-0 ">
      <div className="flex items-center">
        <Feed fontSize="large"/>
        <p className="font-bold">Formekou</p>
      </div>
      <div className="flex items-center">
      <button className="bg-blue-700 hover:bg-sky-500/75 text-white font-bold py-2 px-4 rounded-lg">
        View plans
      </button>
      <AccountCircle fontSize="large" />
      </div>
    </div>
  );
}
