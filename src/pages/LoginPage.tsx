import { useState } from "react";
import type { IUser } from "../types/IUser";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [user, setUser] = useState<IUser>({
    id: 0,
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (user.username.trim() === "" || user.password.trim() === "") {
      setError("Please fill in all fields");
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const loggedUser: IUser = {
        id: Date.now(),
        username: user.username.trim(),
        password: user.password.trim(),
      };

      console.log("Usuário logado:", loggedUser);
      navigate("/todo");
    } catch (e: unknown) {
      setError("Login failed. Please try again." + e);
    }
  };

  return (
    <div className="min-h-screen flex items-center bg-gray-900 justify-center ">
      <div className="w-full max-w-md ">
        <LoginForm
          onSubmit={handleSubmit}
          onChange={handleChange}
          password={user.password}
          username={user.username}
        />

        {error && (
          <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
