import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    var path = window.location.pathname;

    if (path === "/admin") {
      if (
        !localStorage.getItem("token") ||
        localStorage.getItem("role") !== "admin"
      ) {
        navigate("/logout");
      }
    } else if (path === "/userhome") {
      if (
        !localStorage.getItem("token") ||
        localStorage.getItem("role") !== "user"
      ) {
        navigate("/logout");
      }
    } else {
      if (localStorage.getItem("role") === "admin") {
        navigate("/admin");
      } else if (localStorage.getItem("role") === "user") {
        navigate("/userhome");
      } else {
        navigate("/");
      }
    }
  },[]);

  return <></>;
};

export default Auth;
