import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogOut = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const logOut = async() => {
    setLoading(true);
    try {
      await sessionStorage.clear();
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
