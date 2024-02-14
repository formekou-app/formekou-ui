import { Search as SearchIcon } from "@mui/icons-material";

export function Menu(){
  return (
    <div 
      className="py-5 px-2 w-[300px] bg-white fixed left-0 top-[50px]"
      style={{height:"calc(100vh - 50px)"}}
    >
      <div className="bg-gray-200 flex px-2 py-1 rounded-[5px] items-start gap-2">
        <SearchIcon className="text-main-black"/>
        <input 
          type="text" 
          className="text-[14px] text-main-black outline-none w-full bg-transparent"
          placeholder="Search Form"
        />
      </div>
    </div>
  )
}
