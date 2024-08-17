import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="text-center p-3">
      <img className="mx-auto p-3" src={logo}></img>
      <p className="p-2 font-medium">Journalism Without Fear or Favour</p>
      <p className="text-xl font-semibold">
        {moment().format("dddd,MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
