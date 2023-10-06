import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/");
  };
  return (
    <>
      <div className="flex">
        <div className="w-[20%] h-screen flex flex-col items-center gap-5 bg-green-300">
          <h1 className="mt-4 font-bold text-2xl">Side Bar</h1>
          <NavLink to="/dashboard/home">Home</NavLink>
          <NavLink to="/dashboard/student">Student</NavLink>
          <button
            onClick={handleLogout}
            className="bg-red-300 px-3 py-1 rounded-lg"
          >
            Logout
          </button>
        </div>
        <div className="w-[80%] flex flex-col items-center h-screen bg-violet-300">
          <h1 className="font-bold text-2xl mt-2">Detail</h1>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
