import React, { type ChangeEvent, type FormEvent } from "react";
import { InputUI } from "./UI/InputUI";
import { ButtonUI } from "./UI/ButtonUI";
import { useNavigate } from "react-router-dom";

interface LoginFormProp {
  onSubmit: (e: FormEvent) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  username: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProp> = ({
  onChange,
  onSubmit,
  username,
  password,
}) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto p-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-400 font-light">Sign in to manage your tasks</p>
      </div>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block">
            <span className="block text-cyan-300 font-medium mb-2">
              Username
            </span>
            <InputUI
              name="username"
              value={username}
              type="text"
              placeholder="Enter your username"
              onChange={onChange}
            />
          </label>
        </div>

        <div className="space-y-2">
          <label className="block">
            <span className="block text-cyan-300 font-medium mb-2">
              Password
            </span>
            <InputUI
              name="password"
              value={password}
              type="password"
              placeholder="Enter your password"
              onChange={onChange}
            />
          </label>
        </div>

        <div className="pt-2">
          <ButtonUI type="submit" disabled={!username || !password}>
            Sign In
          </ButtonUI>
        </div>
      </form>

      <div className="mt-6 text-center text-sm font-light text-gray-400">
        Don't have an account?{" "}
        <a
          onClick={() => navigate("/building")}
          className="hover:underline cursor-pointer text-cyan-300"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
