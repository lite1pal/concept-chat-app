import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { HTMLAttributes, ReactNode } from "react";

const poppins = Poppins({
  preload: true,
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

interface Heading1Props extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

function Heading1({ children, className, ...props }: Heading1Props) {
  const baseStyles = "text-3xl font-[500]";
  const combinedStyles = cn(baseStyles, className);

  return (
    <h1 className={`${poppins.className} ${combinedStyles}`} {...props}>
      {children}
    </h1>
  );
}

export default Heading1;
