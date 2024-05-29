import axios from "axios";
import React, { useState } from "react";
import useSignUp from "../Hooks/useSignUp";
import CircularProgress from "@mui/material/CircularProgress";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useVerifyOtp from "../Hooks/useVerifyOtp";

const SignUp = () => {
  const [otpInputHide, setOtpInputHide] = useState(true);
  const [inputOtp, setInputOtp] = useState("");
  const [verified, setVerified] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const navigate = useNavigate();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const { loading, signUp } = useSignUp();
  const { otpLoading, verifyOtp, otp } = useVerifyOtp();

  const handleInputOtp = (e) => {
    setInputOtp(e.target.value);
  };
  const sendOtp = async () => {
    if (!input.email) {
      toast.error("Please Provide email");
      return;
    }
    await verifyOtp(input.email);
    setOtpInputHide(false);
  };

  const checkOtp = async () => {
    if (!inputOtp) {
      toast.error("Please enter OTP");
      return;
    }
    if (inputOtp === otp) {
      toast.success("OPT Verified successfully");
      setVerified(true);
    } else {
      toast.error("OTP Verification Failed");
      setInputOtp("");
    }
  };

  const handleShowButton = () => {
    setShowButton(true);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    await signUp(input);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-0 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-gray-900 font-extrabold"> MyMessenger</span>
        </h1>
        <form onSubmit={handleSignUp}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered input-primary w-full max-w-xs"
              onChange={handleInput}
              name="firstName"
              value={input.firstName}
            />
            <label className="label p-2">
              <span className="text-base label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered input-primary w-full max-w-xs"
              onChange={handleInput}
              name="lastName"
              value={input.lastName}
            />
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
              onClick={handleShowButton}
            />
            {showButton && (
              <>
                {!verified && (
                  <>
                    <div className="p-2 flex">
                      {!otpInputHide ? (
                        <>
                          <button
                            type="button"
                            className="btn glass"
                            onClick={checkOtp}
                          >
                            VERIFY OTP
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="btn glass"
                            onClick={sendOtp}
                          >
                            {otpLoading ? (
                              <CircularProgress size={24} />
                            ) : (
                              "SEND OTP"
                            )}
                          </button>
                        </>
                      )}
                      {!otpInputHide && (
                        <>
                          <input
                            type="text"
                            value={inputOtp}
                            onChange={handleInputOtp}
                            placeholder="OTP"
                            className="input input-bordered input-primary w-19 h-18 max-w-xs"
                          />
                        </>
                      )}
                    </div>
                  </>
                )}
              </>
            )}
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
              <button className="btn glass" disabled={!verified}>
                {loading ? <CircularProgress size={24} /> : "SIGN UP"}
              </button>
            </div>
          </div>
        </form>
        <div>
          <Link to="/signIn">Already a account, SignIn here</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
