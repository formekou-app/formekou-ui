import { CreateFormHeader } from "../../../components/forms";
import { CreateFormBody } from "../../../components/forms/CreateFormBody";
import { CreateFormProvider } from "../../../context";

export function CreateForm() {
  return (
    <CreateFormProvider>
      <main className="mt-5 w-full mx-auto max-w-[900px]">
        <CreateFormHeader />
        <CreateFormBody />
      </main>
    </CreateFormProvider>
  );
}
