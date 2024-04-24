"use client";

import { ButtonElement } from "./style";

interface IButtonProps {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: IButtonProps) {
  return <ButtonElement {...props}>{children}</ButtonElement>;
}
