"use client";

import { ButtonElement } from "./style";

interface IButtonProps {
  children: React.ReactNode;
  theme: string;
}

export default function Button({ children, theme, ...props }: IButtonProps) {
  return (
    <ButtonElement theme={theme} {...props}>
      {children}
    </ButtonElement>
  );
}
