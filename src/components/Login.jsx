import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../backend/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
        }
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
        <div className="mb-6 flex justify-center">
          <Logo width="120" className="text-white" />
        </div>
        <h2 className="text-center text-3xl font-extrabold text-white mb-2">
          Sign in to your account
        </h2>
        <p className="text-center text-base text-gray-400 mb-6">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-teal-400 hover:underline">
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-400 text-center mb-6">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <Input
              placeholder="Enter your email"
              type="email"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4"
              {...register("email", {
                required: "Email is required",
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4"
              {...register("password", {
                required: "Password is required",
              })}
            />
          </div>
          <Button
            type="submit"
            className="w-full py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition duration-200"
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
