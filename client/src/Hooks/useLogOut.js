import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

const useLogOut = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logOut = async () => {
    setLoading(true);
    try {
      await sessionStorage.clear();
      setAuthUser(null);
      navigate("/signIn");
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logOut };
};

export default useLogOut;
