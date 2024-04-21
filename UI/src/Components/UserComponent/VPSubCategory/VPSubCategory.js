import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { _subcategoryapiurl } from "./../../../api_base_urls";

function VPSubCategory() {
  const params = useParams();
  const [scList, setSubCategoryList] = useState([]);
  const [subcatnm, setSubcatnm] = useState("");

  useEffect(() => {
    console.log(params.catnm);
    axios
      .get(_subcategoryapiurl + "fetch?catnm=" + params.catnm)
      .then((response) => {
        console.log(response.data);
        setSubCategoryList(response.data);
        setSubcatnm(params.catnm);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.catnm]);

  return (
    <>
      <h1 className="md:text-4xl text-3xl py-2 px-4 capitalize  mt-5 text-center font-extrabold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
        <span className="text-violet-500 "> {`${subcatnm}`} </span> products
      </h1>

      <div className="wrapper flex justify-center">
        <div className="main px-20 bg-orange- flex justify-start flex-wrap">
          {scList.map((row) => (
            <Link  to={`/viewproduct/${row.subcatnm}`}>
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
                      src={`../Uploads/subcaticon/${row.subcaticonnm}`}
                    />
                  </div>

                  <div className="px-2  overflow-hidden text-start">
                    <h1 className="font-bold text-lg capitalize font-sans my-3 text-black">
                      {row.subcatnm}
                    </h1>
                    <p className="text-my-bg-light-dark text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
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
}

export default VPSubCategory;
