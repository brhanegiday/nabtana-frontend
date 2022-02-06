import React from "react";

function NavLink({ navLink }) {
  return (
    <div className="py-5 w-fit">
      <div className="border-[1px] border-shark-300 flex items-center p-2">
        <h3 className="text-sm transition duration-150 ease-out hover:ease-in hover:text-shark-500 border-r-[1px] px-3 border-shark-300 cursor-pointer">
          About
        </h3>
        <h3 className="text-sm transition duration-150 ease-out hover:ease-in text-shark-400 hover:text-shark-500 border-r-[1px] px-3 border-shark-300 cursor-pointer">
          News
        </h3>
        <h3 className="text-sm transition duration-150 ease-out hover:ease-in text-shark-400 hover:text-shark-500 border-r-[1px] px-3 border-shark-300 cursor-pointer">
          FAQ
        </h3>
        <h3 className="text-sm transition duration-150 ease-out hover:ease-in text-shark-400 hover:text-shark-500 px-3 cursor-pointer">
          Contact Us
        </h3>
      </div>
    </div>
  );
}

export default NavLink;
