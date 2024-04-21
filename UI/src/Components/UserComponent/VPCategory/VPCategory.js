import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { _categoryapiurl } from "./../../../api_base_urls";

const VPCategory = () => {
  const [cList, setCategoryList] = useState([]);

  useEffect(() => {
    axios
      .get(_categoryapiurl + "fetch")
      .then((response) => {
        setCategoryList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="wrapper w-full flex flex-col  justify-center bg-green- px-10">
        <h1 className="md:text-5xl text-3xl py-2 px-4 mt-5 text-center font-extrabold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          View Products
        </h1>
        <div className="main bg-orange-  flex justify-center flex-wrap">
          {cList.map((row) => (
            <Link
              className="text-black"
              key={row.id}
              to={`/vpsubcategory/${row.catnm}`}
            >
              <div className="bg-white opacity-95 w-60 h-auto p-3 rounded-lg m-5">
                <div className="flex p-2 gap-1">
                  <div className="">
                    <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
                  </div>
                  <div className="circle">
                    <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
                  </div>
                  <div className="circle">
                    <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
                  </div>
                </div>

                <div className="card__content">
                  <div className="flex justify-center items-center mb-3">
                    <img
                      className="p-2 w-100 h-52 rounded-xl hover:scale-105 transition-all overflow-hidden"
                      src={`./Uploads/caticon/${row.caticonnm}`}
                      alt=""
                    />
                  </div>

                  <div className="px-2  overflow-hidden text-start">
                    <h1 className="font-bold text-lg capitalize text-black">
                      {row.catnm}
                    </h1>
                    <p className="text-my-p-txt">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolores, itaque.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default VPCategory;
