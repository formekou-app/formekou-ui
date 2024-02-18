import { Typography } from "@material-tailwind/react";

export function ReplyFormHeader({ form }) {
  return (
    <div
      className="border-t-[10px] form-block "
      style={{ borderTopColor: form.color }}
    >
      <Typography variant="h2" className="font-bold text-bgray text-[16px] my-3">
        {form.title}
      </Typography>
      <Typography variant="small" className="focus:border-none text-[14px]">
        {form.description}
      </Typography>
      <Typography className="text-bgray my-3 text-[14px]">
        Number of questions: {form.questions ? form.questions.length : 0}
      </Typography>
      <Typography variant="small" className="font-semibold text-bgray text-[14px]">
        <span className="text-red-500 mr-2">/!\</span>
        Mark a required question
      </Typography>
    </div>
  );
}
