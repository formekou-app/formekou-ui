import { Spinner } from "@material-tailwind/react";

export function LoadingPage() {
  return (
    <div className="bg-white w-full flex flex-col items-center justify-center h-screen px-5">
      <Spinner color="blue" className="h-[50px] w-[50px]" />
      <p className="text-bgray mt-5 text-lg text-center">
        This may take a few seconds, please do not close this page.
      </p>
    </div>
  );
}
