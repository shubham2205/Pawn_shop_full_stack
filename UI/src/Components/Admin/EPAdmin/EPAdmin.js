import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { _userapiurl } from "../../../api_base_urls";
import { toast } from "react-toastify";

function EPAdmin() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();

  useEffect(() => {
    axios
      .get(_userapiurl + "fetch?email=" + localStorage.getItem("email"))
      .then((response) => {
        var userDetails = response.data[0];
        setName(userDetails.name);
        setEmail(userDetails.email);
        setMobile(userDetails.mobile);
        setAddress(userDetails.address);
        setCity(userDetails.city);
      });
  }, []);

  const handleSubmit = () => {
    let updateDetails = {
      condition_obj: { email: email },
      content_obj: {
        name: name,
        mobile: mobile,
        address: address,
        city: city,
        gender: gender,
      },
    };

    axios
      .patch(_userapiurl + "update", updateDetails)
      .then((response) => {
        navigate("/epadmin");
      })
      .catch((err) => {
        console.log(err);
      });

    localStorage.setItem("name", name);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("address", address);
    localStorage.setItem("city", city);
    localStorage.setItem("gender", gender);

    setMsg(
      <h1 className="text-green-600 my-2 text-center">
        Profile Update Sucessfully
      </h1>
    );
  };

  return (
    <>
      <form className="max-w-sm md:max-w-xl mx-auto my-10 text-gray-900 ">
        <div className="rounded-lg bg-my-footer-text  shadow-lg px-5 py-5 w-full">
          <h1 class="text-4xl pb-4 text-center font-extrabold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            Edit Profile
          </h1>

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
            <label
              htmlFor="mobile"
              className="block mb-2 text-sm font-medium  "
            >
              Mobile
            </label>

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
              disabled
              readOnly
              id="email"
              className="bg-gray-50  border border-gray-300  text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@gmail.com"
              value={email}
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
                value="male"
                checked
                onChange={(e) => setGender(e.target.value)}
              />
              <div className="title px-2">Male</div>
            </label>

            <label className="flex radio p-2 cursor-pointer">
              <input
                className="my-auto transform scale-125"
                type="radio"
                name="gender"
                value="female"
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
            Update details
          </button>
        </div>
      </form>
    </>
  );
}

export default EPAdmin;
