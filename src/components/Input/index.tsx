import { InputContainer } from "./style";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface IInputProps {
  type?: HTMLInputTypeAttribute | undefined;
  name: string;
  value?: any;
  onChange?: ChangeEventHandler;
}

export default function Input({ type, name, onChange }: IInputProps) {
  return (
    <InputContainer
      onChange={onChange}
      name={name}
      type={type}
    ></InputContainer>
  );
}
