import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("isLogin", true);
    navigate("/dashboard");
  };
  return (
    <>
      <div className="flex flex-col w-screen items-center  h-screen bg-slate-400">
        <h1 className="mt-4 text-3xl font-bold">Login Page</h1>
        <div className="mt-8 flex justify-center gap-5 items-center">
          <button
            onClick={handleLogin}
            className="bg-orange-400 px-3 py-1 rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
