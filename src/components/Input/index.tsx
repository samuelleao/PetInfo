import { InputWrapper } from "./style";

interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  name: string;
}

export const InputGroup = ({
  label,
  placeholder,
  name,
  ...props
}: InputGroupProps): JSX.Element => {
  return (
    <InputWrapper>
      <label htmlFor={name}>{label}</label>
      <input
        {...props}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};
