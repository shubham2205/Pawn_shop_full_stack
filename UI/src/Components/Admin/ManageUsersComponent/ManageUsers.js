import React, { useEffect, useState } from "react";
import { _userapiurl } from "./../../../api_base_urls";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManageUsers = () => {
  const [usersList, setUsersList] = useState([]);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(_userapiurl + "fetch?role=user")
      .then((response) => {
        console.log(response.data);
        setUsersList(response.data);
      })
      .catch((error) => {
        console.log(error);
        setUsersList([]);
      });
  });

  const changeStatus = (_id, status) => {
    setCount(count + 1);
    console.log(count);

    if (status == "block") {
      let updateDetails = {
        condition_obj: { _id: _id },
        content_obj: { status: 0 },
      };
      axios
        .patch(_userapiurl + "update", updateDetails)
        .then((response) => {
          console.log(response);
          navigate("/manageusers");
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (status == "unblock") {
      let updateDetails = {
        condition_obj: { _id: _id },
        content_obj: { status: 1 },
      };
      axios
        .patch(_userapiurl + "update", updateDetails)
        .then((response) => {
          navigate("/manageusers");
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let deleteDetails = { data: { _id: _id } };
      axios
        .delete(_userapiurl + "delete", deleteDetails)
        .then((response) => {
          navigate("/manageusers");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div
        data-te-perfect-scrollbar-init
        data-te-suppress-scroll-x="true"
        className="overflow-x-auto  "
      >
        <center >
          <button className="bg- rounded-lg my-4 ">
            <h1 class="text-5xl py-2 px-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
              Manage Users
            </h1>
          </button>
        </center>

        <table className="min-w-full divide-y divide-gray-200 my-10">
          <thead className="">
            <tr className=" text-base text-left">
              <th
                scope="col"
                className="px-6 py-3  text-gray-500 uppercase tracking-wider"
              >
                UserID
              </th>
              <th
                scope="col"
                className="px-6 py-3  text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3  text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3  text-gray-500 uppercase tracking-wider"
              >
                Mobile
              </th>
              <th
                scope="col"
                className="px-6 py-3  text-gray-500 uppercase tracking-wider"
              >
                Address
              </th>
              <th
                scope="col"
                className="px-6 py-3  text-gray-500 uppercase tracking-wider"
              >
                City
              </th>
              <th
                scope="col"
                className="px-6 py-3  text-gray-500 uppercase tracking-wider"
              >
                Gender
              </th>
              <th
                scope="col"
                className="px-6 py-3  text-gray-500 uppercase tracking-wider"
              >
                Info
              </th>
              <th
                scope="col"
                className="px-6 py-3  text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3  text-gray-500 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200">
            {usersList.map((row) => (
              <tr key={row._id}>
                <td className="px-6 py-4 whitespace-nowrap">{row._id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.mobile}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.city}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.info}</td>

                <td className="px-6 py-4 whitespace-nowrap">
                  {row.status == 1 && (
                    <span className="text-green-500 capitalize"> Verified</span>
                  )}
                  {row.status == 0 && (
                    <span className="text-orange-400 capitalize">
                      Not Verified
                    </span>
                  )}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <td>
                    {row.status == 1 && (
                      <button
                        onClick={() => {
                          changeStatus(row._id, "block");
                          // console.log("status click hua");
                        }}
                        class="relative inline-flex items-center mr-5 my-2 justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-white rounded-lg hover:bg-white group"
                      >
                        <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                          Change Status
                        </span>
                      </button>
                    )}

                    {row.status == 0 && (
                      <button
                        onClick={() => {
                          changeStatus(row._id, "unblock");
                          // console.log("status click hua");
                        }}
                        class="relative inline-flex items-center mr-5 my-2 justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-white rounded-lg hover:bg-white group"
                      >
                        <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                          Change Status
                        </span>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        changeStatus(row._id, "delete");
                        // console.log("delete hua");
                      }}
                      class="relative inline-flex items-center mr-5 my-2 justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-white rounded-lg hover:bg-white group"
                    >
                      <span class="w-48 h-48 rounded rotate-[-40deg] bg-red-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                      <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                        Delete
                      </span>
                    </button>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>
        {`
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `}
      </style>
    </>
  );
};

export default ManageUsers;
