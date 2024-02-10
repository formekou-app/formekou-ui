import { FormHeader } from "../../../components/forms"
import {CreateFormProvider} from "../../../context"

export function CreateForm(){
  return (
    <CreateFormProvider>
      <main className="mt-5 w-full mx-auto max-w-[900px]">
        <FormHeader />
      </main>
    </CreateFormProvider>
  )
}
