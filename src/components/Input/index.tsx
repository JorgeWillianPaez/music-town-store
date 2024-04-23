import { Container } from "./style";

interface IInputProps {
  label: string;
  type: string;
}

export default function Input(props: IInputProps) {
  return (
    <Container>
      <label>{props.label}:</label>
      <input type={props.type} />
    </Container>
  );
}
