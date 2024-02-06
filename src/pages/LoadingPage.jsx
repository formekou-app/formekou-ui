import { Spinner } from "@material-tailwind/react";

export function LoadingPage() {
  return (
    <div className="lp-background">
      <div className="lp-resp">
        <Spinner className="h-16 w-16 text-blue-900/50" />
        <p className="text-white text-lg">Loading</p>
        <p className="text-white text-lg">
          This may take a few seconds, please do not close this page.
        </p>
      </div>
    </div>
  );
}
