import { LoginForm } from "../../pages/Login/Login";

interface InputProps {
  label: string;
  placeholder?: string;
  value: LoginForm;
  handleInputChange: (value: string, formValues: LoginForm) => void;
}

const Input = ({
  label,
  placeholder,
  value,
  handleInputChange,
}: InputProps) => {
  return (
    <div>
      <div>{label}</div>
      <input
        placeholder={placeholder}
        onChange={(e) => handleInputChange(e.target.value, value)}
      />
    </div>
  );
};

export default Input;
