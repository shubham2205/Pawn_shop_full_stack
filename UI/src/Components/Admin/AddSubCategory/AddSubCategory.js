import React, { useEffect, useState } from "react";
import "../AddCategory/AddCategory.css";
import { _categoryapiurl, _subcategoryapiurl } from "../../../api_base_urls";
import axios from "axios";

const AddSubCategory = () => {
  const [file, setFile] = useState();
  const [catName, setCatName] = useState();
  const [subCatName, setSubCatName] = useState();
  const [msg, setMsg] = useState();
  const [cList, setCategoryList] = useState([]);

  useEffect(() => {
    axios
      .get(_categoryapiurl + "fetch")
      .then((response) => {
        //console.log(response.data);
        setCategoryList(response.data);
        console.log(cList);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    //event.preventDefault();
    var formData = new FormData();
    formData.append("catnm", catName);
    formData.append("subcatnm", subCatName);
    formData.append("caticon", file);
    const config = {
      "content-type": "multipart/form-data",
    };
    axios
      .post(_subcategoryapiurl + "save", formData, config)
      .then((response) => {
        setCatName("");
        setSubCatName("");
        setMsg(
          <h1 className="text-green-500 text-center">
            Sub Category added successfully...!!
          </h1>
        );
      })
      .catch((error) => {
        console.error("Error adding category:", error);
        setMsg(
          <h1 className="text-red-500 text-center">Add Category faild....!!</h1>
        );
      });
  };

  return (
    <>
      <div className="flex flex-col  justify-center items-center">
        <span className="md:text-5xl text-3xl py-2 px-4 mt-5 text-center font-extrabold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          Add Sub Category
        </span>
        <div className="form-container w-auto md:w-1/3 my-10">
          <form onSubmit={handleSubmit} className="form text-my-white my-5">
            <h1>{msg}</h1>
            <div className="form-group">
              <label for="catnm">Category Name:</label>

              <select
                className="bg-neutral-900 p-4 rounded-lg mb-5 border border-violet-700"
                value={catName}
                onChange={(e) => setCatName(e.target.value)}
              >
                <option disabled>Select Category</option>
                {cList.map((row) => (
                  <option key={row.id}>{row.catnm}</option>
                ))}
              </select>

              <label
                htmlFor="email"
                className="text-sm font-bold tracking-wide"
              >
                Sub Category Name
              </label>
              <input
                value={subCatName}
                onChange={(e) => setSubCatName(e.target.value)}
                required
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="file" className="text-sm font-bold tracking-wide">
                Category Icon
              </label>
              <input required onChange={handleChange} type="file" />
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="form-submit-btn bg-my-bg-light-dark"
            >
              Add Sub Category
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddSubCategory;
