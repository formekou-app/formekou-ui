import { Typography } from "@material-tailwind/react";
import { QuestionType } from "../../../gen/client";
import { Link } from "react-router-dom";

/*eslint-disable*/
export function AnswerItem({ response }) {
  const { user, question } = response;

  return (
    <div className="form-block my-5">
      <div className="flex items-center gap-2">
        <Typography className="text-bgray text-[14px] font-bold">
          User:
        </Typography>
        <Link to={`/dashboard/profile/${user.id}`}>
          <Typography className="text-blue-900 hover:underline">
            {user.lastName + " " + (user.firstName || "") + user.email}
          </Typography>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Typography className="text-bgray text-[14px] font-bold">
          Question:
        </Typography>
        <Typography>{question.title}</Typography>
      </div>
      {Boolean(question.description) && (
        <div className="flex items-center gap-2">
          <Typography className="text-bgray text-[14px] font-bold">
            Description:
          </Typography>
          <Typography className="text-[14px]">
            {question.description}
          </Typography>
        </div>
      )}
      <div className="flex items-center gap-2">
        <Typography className="text-bgray text-[14px] font-bold">
          Answer:
        </Typography>
        <Typography className="text-[14px]">
          {question.type === QuestionType.Checkbox
            ? response.value.replaceAll("---", " | ")
            : response.value}
        </Typography>
      </div>
      <div className="flex items-center gap-2">
        <Typography className="text-bgray text-[14px] font-bold">
          Date:
        </Typography>
        <Typography className="text-[14px]">
          {new Date(response.createdAt).toLocaleString()}
        </Typography>
      </div>
    </div>
  );
}
