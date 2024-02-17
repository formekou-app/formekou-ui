import { useNavigate } from "react-router-dom"
import { Typography } from "@material-tailwind/react"
import {
  Check as CheckIcon,
  Clear as UnCheckIcon 
} from "@mui/icons-material"

import { Actions } from "./Actions";

function ListHeader() {
  return (
    <div className="flex items-center w-full">
      <p className="px-3 list-view-header" style={{ width: "calc(100% - 690px)" }}>
        Title
      </p>
      <p className="px-3 w-[200px] list-view-header">
        Date created
      </p>
      <p className="px-3 w-[200px] list-view-header">
        Last updated
      </p>
      <p className="px-3 w-[100px] list-view-header">
        Questions
      </p>
      <p className="px-3 w-[90px] list-view-header">
        Private
      </p>
      <p className="px-3 w-[100px] list-view-header">
        Actions
      </p>
    </div>
  )
}

function ListItem({ form }) {
  return (
    <div className="list-view-item" style={{boxShadow: "0px 2px 1px rgba(0,0,0,.1"}}>
      <div
        className="width flex items-center gap-5 px-3"
        style={{ width: "calc(100% - 690px)" }}
      >
        <div className="w-[15px] h-[15px] rounded" style={{backgroundColor: form.color}}/>
        <Typography className="text-[14px]">
          {form.title}
        </Typography>
      </div>
      <Typography className="text-[13px] px-3 w-[200px]">
        {new Date(form.createdAt).toLocaleString()}
      </Typography>
      <Typography className="text-[13px] px-3 w-[200px]">
        {new Date(form.updatedAt).toLocaleString()}
      </Typography>
      <Typography className="text-[13px] px-3 w-[90px] text-center">
        {form.questions ? form.questions.length : 0}
      </Typography>
      <Typography className="text-[13px] px-3 w-[100px] text-center">
        {form.isPrivate ? <CheckIcon /> : <UnCheckIcon />}
      </Typography>
      <div className="w-[100px] text-center">
        <Actions formId={form.id}/>
      </div>
    </div>
  )
}

export function ListView({ forms }) {
  return (
    <div className="w-full">
      <ListHeader />
      <div className="w-full overflow-auto max-h-[420px]">
        {forms.map(form => <ListItem key={form.id} form={form} />)}
      </div>
    </div>
  )
}
