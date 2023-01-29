import { log } from "console";
import React, { useState } from "react";
import Input from "../../components/Input/Input";
import PageTemplate from "../PageTemplate/PageTemplate";

export interface LoginForm {
  username: string;
  password: string;
}

const Login = () => {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const handleInputChange =
    (name: "username" | "password") =>
    (value: string, formValues: LoginForm) => {
      console.log(name);

      setLoginForm(() => ({
        ...formValues,
        [name]: value,
      }));
    };

  console.log(loginForm);

  return (
    <PageTemplate title={"Login"} linkName={"back to home"}>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
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
      </div>
    </PageTemplate>
  );
};

export default Login;
