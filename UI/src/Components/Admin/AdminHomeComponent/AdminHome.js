import React from "react";
import "./AdminHome.css";
import adminProfile from "../../../assets/Images/adminProfile.png";

const AdminHome = () => {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  return (
    <>
      <div className="w-full h-screen  ">
        <div className="p-5 flex items-center justify-center md:justify-end gap-x-2">
          <div className="side-card bg-my-white hover:bg-slate-200 p-3 rounded-lg flex transition-colors duration-2000 ">
            <img
              className="object-cover shadow-xl w-16 h-16 me-2"
              src={adminProfile}
              alt=""
            />

            <div>
              <h1 className="text-2xl font-semibold text-orange-500 capitalize dark:text-white">
                Hello <span className="text-gray-500"> {name} </span>{" "}
                <span className="wave ">👋</span>{" "}
              </h1>
              <p className="text-base text-gray-500 dark:text-gray-400">
                {email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
