import React, { useEffect, useState } from "react";
import { _productapiurl, _subcategoryapiurl } from "../../../api_base_urls";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ViewProduct = () => {
  const params = useParams();
  const [productList, setProductList] = useState([]);
  console.log(params.subcatnm);
  useEffect(() => {
    axios
      .get(_productapiurl + "fetch?subcatnm=" + params.subcatnm)
      .then((response) => {
        console.log(response.data.data);
        setProductList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(productList);
  return (
    <>
      <div className="flex flex-col justify-center items-center py-3">
        {productList.map((row) => (
          <>
            <div>
            

              <div class="cursor-pointer transition-all duration-500 hover:translate-y-2 w-[500px] h-40 my-5  bg-neutral-50 rounded-lg shadow-xl flex flex-row justify-between items-center justify-evenly gap-4 px-4">
                <img
                  src={`../Uploads/product/${row.proiconnm}`}
                  className="w-24 h-24"
                  alt=""
                />
                <div>
                  <p class=" text-black"> <span className="font-bold text-black"> Title :</span> {row.title}</p>
                  <p class="line-clamp-3 text-black"><span className="text-black font-bold"> Description : </span>
                   {row.description}
                  </p>
                  <p class="line-clamp-3 text-black"> <span className="font-bold text-black"> Info :</span>
                   {row.info}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ViewProduct;
