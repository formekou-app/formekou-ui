import { ReplyFormHeader } from "./components/ReplyFormHeader";
import { ReplyFormBody } from "./components/ReplyFormBody";
export function FormReply() {
  return (
    <div className="w-full mx-auto max-w-[900px]">
      <ReplyFormHeader />
      <ReplyFormBody />
    </div>
  );
}
