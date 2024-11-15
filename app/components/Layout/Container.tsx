import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1280px] sm:max-w-[700px] xl:max-w-[1280px] relative mx-auto py-20 xl:py-36 px-[20px] xl:px-10">
      {children}
    </div>
  );
}

export default Container;
