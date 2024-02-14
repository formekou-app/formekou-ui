import { Navbar } from "../../components";
import { Search, AddCircleRounded } from "@mui/icons-material";
import { Menu } from "../../components/menu";

export function Home() {
  return (
    <div className="section">
      <Navbar />
      <Menu />
      <div className="w-full h-[60px] flex items-center justify-between">
        <div className="w-full bg-gray-500 p-2 rounded-lg">
          <form className="flex bord">
            <Search />
            <input
              type="text"
              placeholder="Find wokrspace or typeform"
              className="w-full"
            />
          </form>
        </div>
        <div className="flex justify-between">
          <select className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option>PRIVATE</option>
            <option>OTHERS</option>
          </select>
          <AddCircleRounded />
        </div>
        <ul>
          <li className="flex justify-between p-1.5 bg-gray-500/30">
            My workspace<span>1</span>
          </li>
          <li className="flex justify-between p-1.5">
            My workspaces<span>2</span>
          </li>
          <li className="flex justify-between p-1.5">
            My workspace<span>3</span>
          </li>
        </ul>
        <div className="p-1.5">
          <h3>
            <span>Ricka Princy</span> account
          </h3>
          <p>Responses collected</p>
        </div>
        <div className="p-1.5">
          <span>0</span>/10
          <p>Resets on Mar 10</p>
          <span className="text-green-500">Increase response limit</span>
        </div>
      </div>
    </div>
  );
}
