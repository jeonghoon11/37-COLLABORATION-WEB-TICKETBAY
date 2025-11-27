import type { ButtonHTMLAttributes, ReactNode } from "react";

import * as styles from "./button.css";

type ButtonColor = "default" | "subtle";
type ButtonSize = "buy" | "ticketbayGlobal";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  size?: ButtonSize;
  rightIcon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export const Button = ({
  color = "default",
  size = "buy",
  rightIcon,
  children,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[styles.button({ color, size }), className].filter(Boolean).join(" ")}
      {...rest}
    >
      <span>{children}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};
