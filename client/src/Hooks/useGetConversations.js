import { useEffect, useState } from "react";
import axios from "axios";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getConversations = () => {
    setLoading(true);
    try {
      axios
        .get("https://mymessengerwebapp.onrender.com/api/user/viewAll", {
          headers: { token: sessionStorage.getItem("token") },
        })
        .then((res) => {
          setData(res.data.data);
        });
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getConversations();
  }, []);
  return { data, loading };
};

export default useGetConversations;
