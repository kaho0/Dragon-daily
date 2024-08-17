import React from "react";
import { FaEdit } from "react-icons/fa";

const Profile = ({ user }) => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-6">
          <img
            src={user.profilePicture}
            alt={user.name}
            className="w-24 h-24 rounded-full border-2 border-gray-300 mr-4"
          />
          <div>
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-lg text-gray-600">{user.email}</p>
            {/* Add other user information as needed */}
          </div>
        </div>

        <div className="mt-4">
          <button className="btn btn-primary flex items-center">
            <FaEdit className="mr-2" />
            Edit Profile
          </button>
        </div>

        {/* Additional sections can be added here */}
      </div>
    </div>
  );
};

export default Profile;
