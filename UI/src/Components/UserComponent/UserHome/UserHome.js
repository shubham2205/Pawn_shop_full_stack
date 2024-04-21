import React from "react";
import userprofile from "../../../assets/Images/userprofile.png";
import ColorfullBtn from '../../SmallComponents/Buttons/ColorfullBtn/ColorfullBtn';
import  Carousel  from "../../Carousel/Carousel";

const UserHome = () => {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  return (
    <div>
      <div className="w-full h-auto md:flex md:flex-row-reverse justify-between items-start ">
       
        <div className="p-5 flex items-center justify-end gap-x-2">
          <div className="side-card bg-my-white hover:bg-slate-200 p-3 rounded-lg flex transition-colors duration-2000 ">
            <img
              className="object-cover shadow-xl w-16 h-16 me-2"
              src={userprofile}
              alt=""
            />

            <div>
              <h1 className="text-2xl font-semibold text-orange-500 capitalize dark:text-white">
                Hello <span className="text-gray-500"> {name.trim()} </span>{" "}
                <span className="wave ">👋</span>{" "}
              </h1>
              <p className="text-base text-gray-500 dark:text-gray-400">
                {email}
              </p>
            </div>
          </div>
        </div>


        <div className="left-txt md:pl-16 md:mt-28 px-10 py-20 md:px-0 md:py-0 ">
          <p className="text-base text-my-cream md:text-xl font-semibold mb-8 md:mb-10 md:mt-10 ">
            We are proud of <br /> the works we’ve done.
          </p>
          <h1 className="text-5xl ms  font-extrabold md:text-8xl text-my-white md:font-bold leading-none md:leading-[85px] ">
            We’re <br /> Frontend <br />{" "}
            <span className=" text-my-pink">Developers. </span>
          </h1>
          <div className="my-4 md:mt-8 "><ColorfullBtn/></div>
        </div>




        
      </div>

<div className="py-5">

      <Carousel/>
</div>

   
    </div>
  );
};

export default UserHome;
