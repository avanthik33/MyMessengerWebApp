import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import useSingIn from "../Hooks/useSingIn";
import CircularProgress from "@mui/material/CircularProgress";

const Signin = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const { loading, signIn } = useSingIn();

  const handleSingin = async (e) => {
    e.preventDefault();
    await signIn(input);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-0 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login{"  "}
          <span className="text-gray-900  font-extrabold">MyMessenger</span>
        </h1>
        <form onSubmit={handleSingin}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="input input-bordered input-primary w-full max-w-xs"
              onChange={handleInput}
              name="email"
              value={input.email}
              autoComplete="new-password"
            />
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered input-primary w-full max-w-xs"
              name="password"
              value={input.password}
              onChange={handleInput}
            />
            <div className="pt-3">
              <button className="btn glass" disabled={loading}>
                {loading ? <CircularProgress size={24} /> : "SIGN IN"}
              </button>
            </div>
          </div>
        </form>
        <div>
          <Link to="/">Don't have an account, SignUp here</Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
