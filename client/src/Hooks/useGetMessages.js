import axios from "axios";
import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation) return;
      setLoading(true);
      try {
        await axios
          .get(
            `http://localhost:5000/api/message/${selectedConversation._id}`,
            {
              headers: { token: sessionStorage.getItem("token") },
            }
          )
          .then((res) => {
            setData(res.data.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation) {
      getMessages();
    }
  }, [selectedConversation?._id]);

  return { loading, data };
};

export default useGetMessages;
