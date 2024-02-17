import { useCreateFormStore } from "../../../../stores";

function NumberOfQuestion() {
  const numberOfQuestion = useCreateFormStore(
    (state) => state.questions.length
  );
  return (
    <p className="text-bgray mt-5 text-[14px]">
      Number of questions: {numberOfQuestion}
    </p>
  );
}

export function ReplyFormHeader() {
  const { config } = useCreateFormStore((state) => ({
    config: state.config,
  }));

  return (
    <div
      className="border-t-[10px] form-block"
      style={{ borderTopColor: config.color }}
    >
      <h1 className="form-input font-bold text-[16px]">Form Header</h1>
      <p className="form-input max-h-[50px] focus:border-none terxt-[14px]">
        Form Description
      </p>

      <NumberOfQuestion />
    </div>
  );
}
