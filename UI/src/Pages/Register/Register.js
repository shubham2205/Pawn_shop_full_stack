import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { _userapiurl } from "../../api_base_urls";

const Register = () => {
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [passwordValidation, setPasswordValidation] = useState("");
  const [mobileValidation, setMobileValidation] = useState("");

  const handleSubmit = () => {
    //-------------validation----------
    if (password.length < 5 && password.length > 10) {
      setPasswordValidation("Password must be between 5 and 10 characters");
      return;
    } else {
      setPasswordValidation("");
    }

    if (mobile.length != 10) {
      setMobileValidation("Mobile number must be 10 digit");
    } else {
      setMobileValidation("");
    }

    // ------------validation End ---------------
    const userDetails = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      address: address,
      city: city,
      gender: gender,
    };

     console.log("User Details:", userDetails);
    axios
      .post(_userapiurl + "save", userDetails)
      .then((response) => {
        console.log(response.data)
        setMsg(
          <h1 className="text-green-600 text-xl">Registration successfull</h1>
        );
        setName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setCity("");
        setAddress("");
      })

      .catch((error) => {
        console.log(error);
        setMsg("Registration Failed , please try again");
      });
  };

  return (
    <form className="max-w-sm md:max-w-xl mx-auto my-10 text-gray-900 ">
      <div className="rounded-lg bg-my-footer-text  shadow-lg px-5 py-5 w-full">
        <h1 className="mb-5 text-4xl font-extrabold text-dark-grey-900  text-center drop-shadow-lg">
          Register Here
        </h1>

        <Link
          to="#"
          className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900  bg-grey-300  hover:bg-grey-400 focus:ring-4 focus:ring-grey-300"
        >
          <img
            className="h-5 mr-2"
            src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
            alt=""
          />
          Continue with Google
        </Link>

        <div className="flex items-center mb-3">
          <hr className="h-0 border-b border-solid border-grey-500 grow" />
          <p className="mx-4 text-grey-600 ">or</p>
          <hr className="h-0 border-b border-solid border-grey-500 grow" />
        </div>

        <h1 className="text-orange-600 my-2 text-center">{msg}</h1>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium capitalize "
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50  border capitalize border-gray-300  text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="mobile" className="block mb-2 text-sm font-medium  ">
            Mobile
          </label>
          <p className="text-red-500 text-xs font-bold">{mobileValidation}</p>
          <input
            type="text"
            id="mobile"
            className="bg-gray-50  border border-gray-300  text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Mobile Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium  ">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50  border border-gray-300  text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium  "
          >
            Your password
          </label>
          <p className="text-red-500 text-xs font-bold ">
            {passwordValidation}
          </p>
          <input
            type="password"
            id="password"
            className="bg-gray-50  border border-gray-300  text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Your Password"
            minLength={5}
            maxLength={10}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium  "
          >
            City
          </label>
          <select
            id="countries"
            className="  border border-gray-300  text-gray-900  text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="" className="text-my-cream  bg-my-bg-light-dark">
              Choose a City
            </option>
            <option
              value="Indore"
              className="text-my-cream  bg-my-bg-light-dark"
            >
              Indore
            </option>
            <option
              value="Bhopal"
              className="text-my-cream  bg-my-bg-light-dark"
            >
              Bhopal
            </option>
            <option
              value="Mumbai"
              className="text-my-cream  bg-my-bg-light-dark"
            >
              Mumbai
            </option>
            <option
              value="Jaipur"
              className="text-my-cream  bg-my-bg-light-dark"
            >
              Jaipur
            </option>
          </select>
        </div>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium capitalize "
          >
            Address
          </label>
          <textarea
            rows={4}
            type="text"
            id="address"
            className="bg-gray-50 capitalize border border-gray-300  text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="main flex items-center overflow-hidden my-3 select-none">
          <div className="title py-3 my-auto text-sm mr-3">Gender :</div>
          <label className="flex radio cursor-pointer">
            <input
              className="my-auto transform scale-125"
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
            />
            <div className="title px-2">Male</div>
          </label>

          <label className="flex radio p-2 cursor-pointer">
            <input
              className="my-auto transform scale-125"
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
            />
            <div className="title px-2">Female</div>
          </label>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full px-6 py-5 mb-5 text-base font-bold leading-none bg-orange-500 transition duration-300 rounded-lg hover:bg-slate-400 hover:text-black focus:ring-4 focus:ring-purple-blue-100  hover:shadow-md"
        >
          Register Now
        </button>

        <p className="text-sm leading-relaxed text-grey-900  text-center">
          Already have an account? &nbsp;
          <Link to="/login" className="font-bold text-blue-500 ">
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Register;
