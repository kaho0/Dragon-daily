import React from "react";
import {
  FaFacebookSquare,
  FaGoogle,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className="p-6 space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Login With</h2>
        <button className="btn btn-outline w-full mb-4 flex items-center justify-center space-x-2">
          <FaGoogle />
          <span>Google</span>
        </button>
        <button className="btn btn-outline w-full flex items-center justify-center space-x-2">
          <FaGithub />
          <span>GitHub</span>
        </button>
      </div>
      <div className="p-6 border border-gray-300 rounded-lg space-y-3 mb-8">
        <h2 className="text-2xl font-bold mb-4">Find Us On</h2>
        <a
          className="flex items-center p-4 text-lg border-b border-gray-300 hover:bg-gray-100 rounded-t-lg"
          href=""
        >
          <FaFacebookSquare className="mr-3" /> Facebook
        </a>
        <a
          className="flex items-center p-4 text-lg border-b border-gray-300 hover:bg-gray-100"
          href=""
        >
          <FaTwitterSquare className="mr-3" /> Twitter
        </a>
        <a
          className="flex items-center p-4 text-lg hover:bg-gray-100 rounded-b-lg"
          href=""
        >
          <FaInstagramSquare className="mr-3" /> Instagram
        </a>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg space-y-4">
        <h2 className="text-2xl font-bold mb-4">Q Zone</h2>
        <img
          src={qZone1}
          alt="Q Zone 1"
          className="w-full h-auto mb-4 rounded-lg"
        />
        <img
          src={qZone2}
          alt="Q Zone 2"
          className="w-full h-auto mb-4 rounded-lg"
        />
        <img src={qZone3} alt="Q Zone 3" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default RightSideNav;
