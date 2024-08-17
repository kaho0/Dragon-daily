import React, { useContext } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const photo = form.get("photoURL");
    const name = form.get("name");
    const password = form.get("password");
    console.log(name, photo, email, password);
    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg mt-12">
          {" "}
          <h1 className="text-2xl font-bold text-center mb-8 mt-4">
            {" "}
            Register now!
          </h1>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                name="password"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Enter your photo URL"
                className="input input-bordered w-full"
                name="photoURL"
              />
            </div>
            <div className="form-control">
              <button className="btn bg-black text-white w-full">
                Register
              </button>
            </div>
            <div className="text-center mt-4">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="link link-primary">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
