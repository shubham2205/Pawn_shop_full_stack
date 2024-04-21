import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { _userapiurl } from "../../../api_base_urls";
import { toast } from "react-toastify";

const CPAdmin = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [opassword, setOldPassword] = useState("");
  const [npassword, setNewPassword] = useState("");
  const [cnpassword, setCNewPassword] = useState("");

  const handleSubmit = () => {
    axios
      .get(
        _userapiurl +
          "fetch?email=" +
          localStorage.getItem("email") +
          "&password=" +
          opassword
      )
      .then((response) => {
        console.log(response.data);

        if (npassword == cnpassword) {
          let updateDetails = {
            condition_obj: { email: localStorage.getItem("email") },
            content_obj: { password: cnpassword },
          };
          axios
            .patch(_userapiurl + "update", updateDetails)
            .then((response) => {
              alert(" Password Change Successfully! Login again....")
              navigate("/logout");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          setMsg(
            <span className="text-red-500">
              New & Confirm Password Mismatch, try again....
            </span>
          );
          setNewPassword("");
          setCNewPassword("");
        }
      })
      .catch((error) => {
        setMsg(
          <span className="text-red-500   rounded-lg px-3 py-2">
            Invalid Old Password
          </span>
        );
        setOldPassword("");
      });
  };

  return (
    <>
      <div className="rounded-lg">
        <div className="container flex flex-col mx-auto mt-10 rounded-lg">
          <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
            <div className="flex items-center justify-center w-full">
              <div className="flex items-center xl:p-5">
                <form className="flex flex-col w-full h-full shadow-lg pb-6 text-center p-10 bg-my-footer-text rounded-xl ">
                  <h1 class="text-4xl pb-4 text-center font-extrabold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
                    Change Password
                  </h1>

                  <h1 className="text-green-600 my-2 text-center">{msg}</h1>
                  <label
                    htmlFor="password"
                    className="mb-2 text-sm text-start text-grey-900"
                    type="password"
                  >
                    Old Password *
                  </label>
                  <input
                    id=""
                    type="password"
                    placeholder="Enter Currunt Password"
                    className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium focus:bg-grey-500 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 p-2.5    "
                    value={opassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />

                  <label
                    htmlFor="password"
                    className="mb-2 text-sm text-start text-grey-900"
                  >
                    New Password *
                  </label>
                  <input
                    id=""
                    type="password"
                    placeholder="Enter New Password"
                    className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 p-2.5    "
                    value={npassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {/* <p>{setPasswarn}</p> */}
                  <label
                    htmlFor="password"
                    className="mb-2 text-sm text-start text-grey-900"
                  >
                    Confirm New Password *
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Confirm Enter a password"
                    className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 p-2.5    "
                    value={cnpassword}
                    onChange={(e) => setCNewPassword(e.target.value)}
                  />

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full px-6 py-5 mb-5 text-base font-bold leading-none bg-orange-500 transition duration-300 md:w-96 rounded-lg hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500 dark:bg-blue-500"
                  >
                    Update Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 my-5"></div>
      </div>
    </>
  );
};

export default CPAdmin;
