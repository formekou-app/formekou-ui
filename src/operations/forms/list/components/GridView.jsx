import { Typography } from "@material-tailwind/react"
import { Actions } from "./Actions"

function GridItem({ form }) {
  return (
    <div
      style={{ boxShadow: "0px 2px 1px rgba(0,0,0,.1" }}
      className="w-[150px] h-[150px] rounded-[10px] bg-white"
    >
      <div 
        className="flex relative items-center justify-center flex-col" 
        style={{height: "calc(100% - 20px)"}}
      >
        <Typography variant="small" className="text-bgray text-[14px]">
          {form.title}
        </Typography>
        <div className="absolute top-[5px] right-[5px]">
          <Actions formId={form.id}/>
        </div>
      </div>
      <div 
        className="flex items-center rounded-b-[10px] w-full h-[20px]" 
        style={{backgroundColor: form.color}}
      />
    </div>
  )
}

export function GridView({ forms }) {
  return (
    <div className="w-full flex items-center gap-3 flex-wrap">
      {forms.map(form => <GridItem key={form.id} form={form} />)}
    </div>
  )
}
