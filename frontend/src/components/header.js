import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4 fixed w-full z-10 ">
        <div className="container mx-auto flex justify-between items-center">
          <Link to='/' className="text-white text-xl font-bold">Census Management</Link>
          <div className="space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white">
              Trend Analysis
            </Link>
            <Link to="/addData" className="text-gray-300 hover:text-white">
              Add Data
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default header;
