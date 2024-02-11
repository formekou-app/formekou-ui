import { CreateFormHeader } from "../../../components/forms";
import { CreateFormBody } from "../../../components/forms/CreateFormBody";

export function CreateForm() {
  return (
    <main className="mt-5 w-full mx-auto max-w-[900px]">
      <CreateFormHeader />
      <CreateFormBody />
    </main>
  );
}
