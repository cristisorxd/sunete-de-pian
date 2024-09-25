import React from "react";
import logo from "../../assets/logoico.ico";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-center pb-2">
      <a href="https://www.sunetedepian.ro" target="_blank">
        <img src={logo} alt="logo" className="w-24 md:w-32" />
      </a>
    </div>
  );
};

export default Navbar;