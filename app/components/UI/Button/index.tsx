"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type Variant = "primary" | "ghost" | "secondary" | "custom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
}

function Button({
  children,
  onClick = () => {},
  type = "button",
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "text-[24px] max-sm:text-[20px] max-sm:h-[52px] max-sm:w-full max-sm:py-0 max-sm:px-0 items-center px-20 py-5 justify-center active:scale-95 font-medium rounded-full focus:outline-none transition duration-300";

  const variants: Record<Variant, string> = {
    primary: "bg-white hover:bg-slate-200",
    secondary: "bg-primary text-white hover:bg-[#3371FF]",
    ghost: "hover:bg-white hover:bg-opacity-10 border text-white",
    custom: "",
  };

  const combinedStyles = cn(baseStyles, variants[variant], className);

  // const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <button onClick={onClick} type={type} className={combinedStyles} {...props}>
      {children}
    </button>
  );
}

export default Button;
