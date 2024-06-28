"use client";

import { InputContainer } from "./style";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface IInputProps {
  type?: HTMLInputTypeAttribute | undefined;
  name: string;
  value?: any;
  onChange?: ChangeEventHandler;
  checked?: boolean;
}

export default function Input({ type, name, onChange, checked }: IInputProps) {
  return (
    <InputContainer
      onChange={onChange}
      name={name}
      type={type}
      checked={checked}
    ></InputContainer>
  );
}
