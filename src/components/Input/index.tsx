import { InputWrapper } from "./style";

interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  name: string;
  error?: boolean;
}

export const InputGroup = ({
  label,
  placeholder,
  name,
  error,
  ...props
}: InputGroupProps): JSX.Element => {
  return (
    <InputWrapper error={error}>
      <label htmlFor={name}>{label}</label>
      <input {...props} id={name} name={name} placeholder={placeholder} />
    </InputWrapper>
  );
};
