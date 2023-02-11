import { log } from "console";
import React, { useState } from "react";
import Input from "../../components/Input/Input";
import { useAppDispatch } from "../../redux/hooks";
import { registerUser } from "../../redux/slices/userSlice";
import PageTemplate from "../PageTemplate/PageTemplate";

export interface LoginForm {
  username: string;
  password: string;
  email: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: "",
    password: "",
    email: "",
  });

  const handleInputChange =
    (name: "username" | "password" | "email") =>
    (value: string, formValues: LoginForm) => {
      console.log(name);

      setLoginForm(() => ({
        ...formValues,
        [name]: value,
      }));
    };

  const handleRegister = () => {
    dispatch(registerUser(loginForm));
  };

  return (
    <PageTemplate title={"Login"} linkName={"back to home"}>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Input
          handleInputChange={handleInputChange("email")}
          value={loginForm}
          label={"email"}
          placeholder="Enter your password"
        />
        <Input
          handleInputChange={handleInputChange("username")}
          value={loginForm}
          label="username"
          placeholder="Enter your username"
        />
        <Input
          handleInputChange={handleInputChange("password")}
          value={loginForm}
          label={"password"}
          placeholder="Enter your password"
        />
        <button onClick={handleRegister}>register</button>
      </div>
    </PageTemplate>
  );
};

export default Login;
