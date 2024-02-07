import { Spinner } from "@material-tailwind/react";

export function LoadingPage() {
  return (
    <div className="lp-background">
      <div className="lp-resp">
        <Spinner color="blue" className="h-[50px] w-[50px]" />
        <p className="text-bgray mt-5 text-lg">
          This may take a few seconds, please do not close this page.
        </p>
      </div>
    </div>
  );
}
