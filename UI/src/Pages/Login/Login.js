import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { _userapiurl } from "../../api_base_urls";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [msg , setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userDetails = {
    email: email,
    password: password,
  };

  const handleSubmit = () => {
    const userDetails = { email: email, password: password };
    axios
      .post(_userapiurl + "login", userDetails)

      .then((response) => {
        const token = response.data.token;
        const userDetails = response.data.userDetails;
        // console.log("User details received:", userDetails);
        localStorage.setItem("token", token);
        localStorage.setItem("_id", userDetails._id);
        localStorage.setItem("name", userDetails.name);
        localStorage.setItem("email", userDetails.email);
        localStorage.setItem("mobile", userDetails.mobile);
        localStorage.setItem("address", userDetails.address);
        localStorage.setItem("city", userDetails.city);
        localStorage.setItem("gender", userDetails.gender);
        localStorage.setItem("role", userDetails.role);
        userDetails.role === "admin" ? navigate("/admin") : navigate("/userhome");
      })

      .catch(
        (error) =>
          setMsg(<h1 className="text-red-500">Invalid Credentials</h1>),
        setEmail(""),
        setPassword("")
      );
  };

  return (
    <div className="rounded-lg">
      <div className="container flex flex-col mx-auto mt-10 rounded-lg">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center xl:p-5">
              <form className="flex flex-col w-full h-full shadow-lg pb-6 text-center p-10 bg-my-footer-text rounded-xl ">
                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                  Sign In
                </h3>

                <Link
                  href="#"
                  className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 dark:bg-gray-700 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300 "
                >
                  <img
                    className="h-5 mr-2"
                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                    alt=""
                  />
                  Sign in with Google
                </Link>
                <div className="flex items-center mb-3">
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                  <p className="mx-4 text-grey-600">or</p>
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                </div>

                <h1 className="text-green-600 my-2 text-center">{msg}</h1>
                <label
                  htmlFor="email"
                  className="mb-2 text-sm text-start text-grey-900"
                >
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="mail@loopple.com"
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium focus:bg-grey-500 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 p-2.5    "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="password"
                  className="mb-2 text-sm text-start text-grey-900"
                >
                  Password*
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter a password"
                  className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 p-2.5    "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className="flex flex-row justify-end mb-8">
                  
                  <Link
                    href="#"
                    className="mr-4 text-sm font-medium text-purple-blue-500 "
                  >
                    Forget password?
                  </Link>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full px-6 py-5 mb-5 text-base font-bold leading-none bg-orange-500 transition duration-300 md:w-96 rounded-lg hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500 dark:bg-blue-500"
                >
                  Sign In
                </button>
                <p className="text-sm leading-relaxed text-grey-900">
                  Not registered yet? &nbsp;
                  <Link
                    to="/register"
                    className="font-bold text-blue-500 "
                  >
                    Create an Account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 my-5"></div>
    </div>
  );
};

export default Login;
