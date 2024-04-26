"use client";

import { ButtonElement } from "./style";

interface IButtonProps {
  children: React.ReactNode;
  theme: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button" | undefined;
}

export default function Button({
  children,
  theme,
  onClick,
  type,
  ...props
}: IButtonProps) {
  return (
    <ButtonElement type={type} onClick={onClick} theme={theme} {...props}>
      {children}
    </ButtonElement>
  );
}
