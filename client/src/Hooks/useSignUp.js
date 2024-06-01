import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const signUp = async ({ firstName, lastName, email, password }) => {
    const validated = validateInput({ firstName, lastName, email, password });
    if (!validated) {
      return;
    }
    setLoading(true);
    try {
      await axios
        .post("https://mymessengerwebapp.onrender.com/api/auth/signup", {
          firstName,
          lastName,
          email,
          password,
        })
        .then((res) => {
          if (res.data.status === "success") {
            toast.success("Sign up successful! Redirecting...");
            setTimeout(() => {
              navigate("/signIn");
            }, 1500);
          }
          if(res.data.status==="error"){
            toast.error(res.data.message)
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading };
};

const validateInput = ({ firstName, lastName, email, password }) => {
  if (!firstName || !lastName || !email || !password) {
    toast.error("Inputs are missing");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
};

export default useSignUp;
