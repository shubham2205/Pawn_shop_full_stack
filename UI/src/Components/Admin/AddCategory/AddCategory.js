// AddCategory.js
import React, { useState } from "react";
import "./AddCategory.css";
import { _categoryapiurl } from "../../../api_base_urls";
import axios from "axios";

const AddCategory = () => {
  const [msg, setMsg] = useState("");
  const [catName, setCatName] = useState("");
  const [file, setFile] = useState("");

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append("catnm", catName);
    formData.append("caticon", file);

    try {
      const response = await axios.post(_categoryapiurl + "save", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setCatName("");
      setFile("");
      setMsg(
        <h1 className="text-green-500 text-center">
          Category added successfully...!!
        </h1>
      );
    } catch (error) {
      console.error("Error adding category:", error);
      setMsg(
        <h1 className="text-red-500 text-center">Add Category faild....!!</h1>
      );
    }
  };

  return (
    <>
      <div className="flex flex-col  justify-center items-center">
        <span className="md:text-5xl text-3xl py-2 px-4 mt-5 text-center font-extrabold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          Add Category
        </span>
        <div className="form-container w-auto md:w-1/3 my-10">
          <form onSubmit={handleSubmit} className="form text-my-white my-5">
            <h1>{msg}</h1>
            <div className="form-group">
              <label
                htmlFor="email"
                className="text-sm font-bold tracking-wide"
              >
                Category Name
              </label>
              <input
                value={catName}
                onChange={(e) => setCatName(e.target.value)}
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
            <button type="submit" className="form-submit-btn">
              Add Category
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
