import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const useVerifyOtp = () => {
  const [otpLoading, setOtpLoading] = useState(false);
  const [otp, setOtp] = useState("");

  const verifyOtp = async (email) => {
    setOtpLoading(true);
    try {
      await axios
        .post("http://localhost:5000/api/auth/sendOtp", { email })
        .then((res) => {
          setOtp(res.data.otp);
          toast.success(
            "A verification code has been sent to your email address."
          );
        })
        .catch((err) => {
          if (err) {
            toast.error("somthing went wrong!");
          }
        });
    } catch (error) {
      console.log(error);
    } finally {
      setOtpLoading(false);
    }
  };
  return { otp, verifyOtp, otpLoading };
};

export default useVerifyOtp;
