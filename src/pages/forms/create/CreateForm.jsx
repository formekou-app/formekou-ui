import { CreateFormHeader } from "../../../components/forms";
import { CreateFormBody } from "../../../components/forms/CreateFormBody";
import { NavBar } from "../../../components/navbar/NavBar";
export function CreateForm() {
  return (
    <main>
      <NavBar />
      <div className="mt-5 w-full mx-auto max-w-[900px]">
        <CreateFormHeader />
        <CreateFormBody />
      </div>
    </main>
  );
}
