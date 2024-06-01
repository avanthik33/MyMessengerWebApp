import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

const useSingIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signIn = async ({ email, password }) => {
    const validated = await validate({ email, password });
    if (!validated) {
      return;
    }
    setLoading(true);
    try {
      await axios
        .post("http://localhost:5000/api/auth/signin", { email, password })
        .then((res) => {
          if (res.data.message === "user authenticated") {
            sessionStorage.setItem("token", res.data.token);
            navigate("/userDash");
            setAuthUser(res.data.data);
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signIn };
};

const validate = ({ email, password }) => {
  if (!email || !password) {
    toast.error("inputs are missing");
    return false;
  }
  return true;
};

export default useSingIn;
