import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Images/favicon.png";
import "./Navbar.css";
import Auth from "../FunctionalComponent/Authentication/Auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [navContent, setNavContent] = useState("");

  {
    /*------toggle menu control start-------*/
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  {
    /*------toggle menu control end-------*/
  }

  useEffect(() => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    if (token != undefined && role == "admin") {
      setNavContent(
        <>
          <div className="p-3 md:flex justify-between items-center bg-my-bg-light-dark text-gray-400 shadow-lg">
            <div className="nav-left font-bold text-2xl flex items-center justify-between">
              <img src={logo} alt="" width={40} className="rounded-lg" />
              <h1 className="text-3xl text-orange-500 logo ms-2"> Pawn Shop</h1>
              <h1 className="md:hidden pluse" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
              </h1>
            </div>
            <div
              className={`navmid ${
                isOpen ? "block" : "hidden"
              } md:flex justify-center font-semibold transition-all duration-300 ease-in-out`}
            >
              <ul className="mt-5 md:mt-0 md:flex text-base">
                <li className="md:p-3 p-1 hover:text-orange-500">
                  <Link to="/admin" onClick={toggleMenu}>
                    Admin Home
                  </Link>
                </li>
                <li className="md:p-3 p-1 hover:text-orange-500">
                  <Link to="/manageusers" onClick={toggleMenu}>
                    Manageusers
                  </Link>
                </li>

                {/* <li className="md:p-3 p-1 hover:text-orange-500">
                  <Link to="/reviewproduct" onClick={toggleMenu}>
                   Review Products
                  </Link>
                </li> */}

                <li
                  className="relative md:p-3 p-1 hover:text-orange-500"
                  onMouseEnter={() => setIsDropdownOpen2(true)}
                  onMouseLeave={() => setIsDropdownOpen2(false)}
                >
                  {/* <!-- Dropdown menu --> */}
                  <button
                    id="dropdownDelayButton"
                    data-dropdown-toggle="dropdownDelay"
                    data-dropdown-delay="500"
                    data-dropdown-trigger="hover"
                    className="  font-bolder text-base   "
                    type="button"
                    >
                    Manage Category
                  </button>

                  <div
                    className={`${
                      isDropdownOpen2 ? "block" : "hidden"
                    } absolute left-1 md:right-0 z-10 bg-my-gray divide-y divide-gray-100 rounded-lg shadow w-44`}
                    id="dropdownDelay"
                    >
                    <ul
                      aria-labelledby="dropdownDelayButton"
                      className="py-2 text-sm text-gray-700"
                      >
                      <li>
                        <Link
                          to="/addcategory"
                          className="block px-4 py-2 hover:bg-orange-500   "
                        >
                          Add Category&nbsp; &gt;
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/addsubcategory"
                          className="block px-4 py-2 hover:bg-orange-500 "
                        >
                          Add Sub Category &nbsp; &gt;
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Dropdown menu end --> */}
                </li>

                <li
                  className="relative md:p-3 p-1 hover:text-orange-500"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {/* <!-- Dropdown menu --> */}
                  <button
                    id="dropdownDelayButton"
                    data-dropdown-toggle="dropdownDelay"
                    data-dropdown-delay="500"
                    data-dropdown-trigger="hover"
                    className=" bg-my-white font-bold text-orange-500 py-2 md:mt-[-10px] hover:bg-my-cream focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5  text-center inline-flex items-center justify-center "
                    type="button"
                  >
                    Settings
                    <span className="text-xl  mt-[-7px] ms-2 text-orange-500 animate-bounce">
                      &#8964;
                    </span>
                  </button>

                  <div
                    className={`${
                      isDropdownOpen ? "block" : "hidden"
                    } absolute left-1 md:right-0 z-10 bg-my-gray divide-y divide-gray-100 rounded-lg shadow w-44`}
                    id="dropdownDelay"
                  >
                    <ul
                      aria-labelledby="dropdownDelayButton"
                      className="py-2 text-sm text-gray-700"
                    >
                      <li>
                        <Link
                          to="/epadmin"
                          className="block px-4 py-2 hover:bg-orange-500   "
                        >
                          Edit Profile &nbsp; &gt;
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/cpadmin"
                          className="block px-4 py-2 hover:bg-orange-500 "
                        >
                          Change Password &nbsp; &gt;
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Dropdown menu end --> */}
                </li>

                <li></li>
              </ul>
            </div>
            <div
              className={`navright ${
                isOpen ? "block" : "hidden"
              } md:flex justify-center mt-4 font-semibold transition-all duration-300 ease-in-out`}
            >
              <Link to="/logout" onClick={toggleMenu}>
                <button
                  type="button"
                  className="py-2.5 px-5 me-2 mr-10 mb-2 text-sm  text-black font-bold focus:outline-none bg-orange-500 rounded-lg border border-slate-200 hover:bg-slate-400 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-slate-200 "
                >
                  Logout
                </button>
              </Link>
            </div>
          </div>
        </>
      );
    } else if (token != undefined && role == "user") {
      setNavContent(
        <>
          <div className="p-3 md:flex justify-between items-center  text-gray-400   bg-my-bg-light-dark shadow-lg">
            <div className="nav-left font-bold text-2xl flex items-center justify-between">
              <img src={logo} alt="" width={40} className="rounded-lg" />
              <h1 className="text-3xl text-orange-500 logo ms-2"> Pawn Shop</h1>
              <h1 className="md:hidden pluse" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
              </h1>
            </div>
            <div
              className={`navmid ${
                isOpen ? "block" : "hidden"
              } md:flex justify-center font-semibold transition-all duration-300 ease-in-out`}
            >
              <ul className="mt-5 md:mt-0 md:flex text-base">
                <li className="md:p-3 p-1 hover:text-orange-500">
                  <Link to="/userhome" onClick={toggleMenu}>
                    User Home
                  </Link>
                </li>
                {/* <li className="md:p-3 p-1 hover:text-orange-500">
                  <Link to="/about" onClick={toggleMenu}>
                    About
                  </Link>
                </li> */}
                {/* <li className="md:p-3 p-1 hover:text-orange-500">
                  <Link to="/services" onClick={toggleMenu}>
                    Services
                  </Link>
                </li> */}
                <li className="md:p-3 p-1 hover:text-orange-500">
                  <Link to="/vpcategory" onClick={toggleMenu}>
                   View Products
                  </Link>
                </li>
                {/* <li className="md:p-3 p-1 hover:text-orange-500">
                  <Link to="/userreviewproduct" onClick={toggleMenu}>
                   Review Your Products
                  </Link>
                </li> */}
                <li className="md:p-3 p-1 hover:text-orange-500">
                  <Link to="/addproduct" onClick={toggleMenu}>
                 Add Your Products
                  </Link>
                </li>
                {/* <li className="md:p-3 p-1 hover:text-orange-500">
                  <Link to="/contact" onClick={toggleMenu}>
                    Contact
                  </Link>
                </li> */}

                <li
                  className="relative md:p-3 p-1 hover:text-orange-500"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {/* <!-- Dropdown menu --> */}
                  <button
                    id="dropdownDelayButton"
                    data-dropdown-toggle="dropdownDelay"
                    data-dropdown-delay="500"
                    data-dropdown-trigger="hover"
                    className=" bg-my-whit font-bold focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm   text-center inline-flex items-center justify-center "
                    type="button"
                  >
                    Settings
                  </button>

                  <div
                    className={`${
                      isDropdownOpen ? "block" : "hidden"
                    } absolute left-1 md:right-0 z-10 bg-my-gray divide-y divide-gray-100 rounded-lg shadow w-44`}
                    id="dropdownDelay"
                  >
                    <ul
                      aria-labelledby="dropdownDelayButton"
                      className="py-2 text-sm text-gray-700"
                    >
                      <li>
                        <Link
                          to="/epadmin"
                          className="block px-4 py-2 hover:bg-orange-500   "
                        >
                          Edit Profile &nbsp; &gt;
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/cpadmin"
                          className="block px-4 py-2 hover:bg-orange-500 "
                        >
                          Change Password &nbsp; &gt;
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Dropdown menu end --> */}
                </li>
              </ul>
            </div>
            <div
              className={`navright ${
                isOpen ? "block" : "hidden"
              } md:flex justify-center mt-4 font-semibold transition-all duration-300 ease-in-out`}
            >
              <Link to="/logout" onClick={toggleMenu}>
                <button
                  type="button"
                  className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-slate-900 focus:outline-none bg-green-500 rounded-lg border border-slate-200 hover:bg-slate-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-700"
                >
                  Logout
                </button>
              </Link>

              <Link to="/register" onClick={toggleMenu}></Link>
            </div>
          </div>
        </>
      );
    } else {
      setNavContent(
        <>
          <div className="p-3 md:flex justify-between items-center  text-gray-400   bg-my-bg-light-dark shadow-lg">
            <div className="nav-left font-bold text-2xl flex items-center justify-between">
              <img src={logo} alt="" width={40} className="rounded-lg" />
              <h1 className="text-3xl text-orange-500 logo ms-2"> Pawn Shop</h1>
              <h1 className="md:hidden pluse" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
              </h1>
            </div>
            <div
              className={`navmid ${
                isOpen ? "block" : "hidden"
              } md:flex justify-center font-semibold transition-all duration-300 ease-in-out`}
            >
              <ul className="mt-5 md:mt-0 md:flex text-base">
                <li className="md:p-3 p-1 hover:text-orange-500">
                  <Link to="/" onClick={toggleMenu}>
                    Visitor Home
                  </Link>
                </li>
                <li className="md:p-3 p-1 hover:text-orange-500">
                  <Link to="/about" onClick={toggleMenu}>
                    About
                  </Link>
                </li>
                <li className="md:p-3 p-1 hover:text-orange-500">
                  <Link to="/services" onClick={toggleMenu}>
                    Services
                  </Link>
                </li>
                <li className="md:p-3 p-1 hover:text-orange-500">
                  <Link to="/pages" onClick={toggleMenu}>
                    Pages
                  </Link>
                </li>
                <li className="md:p-3 p-1 hover:text-orange-500">
                  <Link to="/contact" onClick={toggleMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className={`navright ${
                isOpen ? "block" : "hidden"
              } md:flex justify-center mt-4 font-semibold transition-all duration-300 ease-in-out`}
            >
              <Link to="/login" onClick={toggleMenu}>
                <button
                  type="button"
                  className="py-2.5 px-5 me-3 mb-2 text-sm font-medium text-slate-900 focus:outline-none bg-orange-500 rounded-lg border border-slate-200 hover:bg-slate-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-700"
                >
                  Login
                </button>
              </Link>

              <Link to="/register" onClick={toggleMenu}>
                <button
                  type="button"
                  className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-slate-900 focus:outline-none bg-white rounded-lg border border-slate-200 hover:bg-slate-100 hover:text-blue-700 focus:z-10 focus:ring-4  "
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </>
      );
    }
  });

  return (
    <>
      <Auth />
      {navContent}
    </>
  );
};

export default Navbar;
