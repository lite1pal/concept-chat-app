import { cn } from "@/lib/utils";
import clsx from "clsx";
import { HTMLAttributes } from "react";

interface LineProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function Line({ className, ...props }: LineProps) {
  const baseStyles = "w-[54px] border-white border-b-2 h-[10px]";
  const combinedStyles = cn(baseStyles, className);

  return <div className={combinedStyles} {...props}></div>;
}

export default Line;
