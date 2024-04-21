import axios from "axios";
import { useState, useEffect } from "react";
import {
  _categoryapiurl,
  _productapiurl,
  _subcategoryapiurl,
} from "../../../api_base_urls";
import { Link } from "react-router-dom";

function Addproduct() {
  const [output, setOutput] = useState();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [subcategory, setSubCategory] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState();
  const [cList, setCategoryList] = useState([]);
  const [scList, setSubCategoryList] = useState([]);
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    axios
      .get(_categoryapiurl + "fetch")
      .then((response) => {
        setCategoryList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fetchSubCategory = (catnm) => {
    setCategory(catnm);
    axios
      .get(_subcategoryapiurl + "fetch?catnm=" + catnm)
      .then((response) => {
        setSubCategoryList(response.data);
        console.log(response.data + "sub");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var formData = new FormData();
    formData.append("title", title);
    formData.append("catnm", category);
    formData.append("subcatnm", subcategory);
    formData.append("description", description);
    formData.append("uid", localStorage.getItem("email"));
    formData.append("proicon", file);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    axios
      .post(_productapiurl + "save", formData, config)
      .then((response) => {
        setMsg(
          <h1 className="text-green-500 text-center">
            Sub Category added successfully...!!
          </h1>
        );
        setFile(null);
        setTitle("");
        setCategory("");
        setSubCategory("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error adding subcategory:", error);
        setMsg(
          <h1 className="text-red-500 text-center">
            Error adding subcategory. Please try again.
          </h1>
        );
      });

    alert("sub cat submitted....");
  };

  return (
    <>
      {/* <div class="container-xxl py-5 ">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
              <h1 class="mb-4">Add Product For Selling Review!!!</h1>
              <font color="orange">{output}</font>
              <form>
                <div class="form-group">
                  <label for="title">Product Title:</label>
                  <input
                    type="text"
                    class="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <br />
                <div class="form-group">
                  <label for="category">Category:</label>
                  <select
                    value={category}
                    onChange={(e) => fetchSubCategory(e.target.value)}
                    class="form-control"
                  >
                    <option>Select Category</option>
                    {cList.map((row) => (
                      <option>{row.catnm}</option>
                    ))}
                  </select>
                </div>
                <br />
                <div class="form-group">
                  <label for="subcategory">SubCategory:</label>
                  <select
                    value={subcategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    class="form-control"
                  >
                    <option>Select SubCategory</option>
                    {scList.map((row) => (
                      <option>{row.subcatnm}</option>
                    ))}
                  </select>
                </div>
                <br />
                <div class="form-group">
                  <label for="description">Description:</label>
                  <textarea
                    rows="5"
                    class="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <br />
                <div class="form-group">
                  <label for="file">Product Icon:</label>
                  <input
                    type="file"
                    class="form-control"
                    onChange={handleChange}
                  />
                </div>
                <br />
                <button
                  onClick={handleSubmit}
                  type="button"
                  class="btn btn-success"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>  */}

      {/* <form className="max-w-sm md:max-w-xl mx-auto my-10 text-gray-900 ">
        <div className="rounded-lg bg-my-footer-text  shadow-lg px-5 py-5 w-full">
          <h1 className="mb-5 text-4xl font-extrabold text-dark-grey-900 capitalize text-center drop-shadow-lg">
            Add your product
          </h1>

          <h1 className="text-orange-600 my-2 text-center">{msg}</h1>

          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium capitalize "
            >
              Product Title
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50  border capitalize border-gray-300  text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Product name"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium capitalize "
            >
              Category
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50  border capitalize border-gray-300  text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Category"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium capitalize "
            >
              SubCategory
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50  border capitalize border-gray-300  text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="SubCategory"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium capitalize "
            >
              Description
            </label>
            <textarea
              type="text"
              id="name"
              className="bg-gray-50  border capitalize border-gray-300  text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="  Description here......"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium capitalize "
            >
              Product Icon:
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50  border capitalize border-gray-300  text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Product icon"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full my-3 px-6 py-5 mb-5 text-base font-bold leading-none bg-orange-500 transition duration-300 rounded-lg hover:bg-slate-400 hover:text-black focus:ring-4 focus:ring-purple-blue-100  hover:shadow-md"
          >
           Add Product Now
          </button>

         
        </div>
      </form>  */}

      <div className="container-xxl py-5 ">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
              <div className="rounded-lg  shadow-lg px-5 py-5 w-full">
                <h1 className="mb-5 text-4xl font-extrabold text-dark-grey-900 capitalize text-center drop-shadow-lg">
                  Add Product For Selling Review!!!
                </h1>
                <font color="orange">{output}</font>
                <form className="max-w-sm md:max-w-xl mx-auto my-10 text-black rounded-lg px-7 bg-my-gray p-4 ">
                  <div className="mb-5">
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium capitalize "
                    >
                      Product Title:
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="bg-gray-50  border capitalize border-gray-300  text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium capitalize "
                    >
                      Category:
                    </label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => fetchSubCategory(e.target.value)}
                      className="bg-gray-50  border capitalize border-gray-300  text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option className="text-orange-500">
                        Select Category
                      </option>
                      {cList.map((row) => (
                        <option className="text-black">{row.catnm}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="subcategory"
                      className="block mb-2 text-sm font-medium capitalize "
                    >
                      SubCategory:
                    </label>
                    <select
                      id="subcategory"
                      value={subcategory}
                      onChange={(e) => setSubCategory(e.target.value)}
                      className="bg-gray-50  border capitalize border-gray-300  text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option className="text-orange-500">
                        Select SubCategory
                      </option>
                      {scList.map((row) => (
                        <option className="text-black">{row.subcatnm}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium capitalize "
                    >
                      Description:
                    </label>
                    <textarea
                      id="description"
                      rows="5"
                      className="bg-gray-50  border capitalize border-gray-300  text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="file"
                      className="block mb-2 text-sm font-medium capitalize "
                    >
                      Product Icon:
                    </label>
                    <input
                      type="file"
                      id="file"
                      className="bg-gray-50  border capitalize border-gray-300  text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="w-full my-3 px-6 py-5 mb-5 text-base font-bold leading-none bg-orange-500 transition duration-300 rounded-lg hover:bg-slate-400 hover:text-black focus:ring-4 focus:ring-purple-blue-100  hover:shadow-md"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addproduct;
