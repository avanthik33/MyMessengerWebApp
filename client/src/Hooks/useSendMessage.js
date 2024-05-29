import axios from "axios";
import React, { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      await axios
        .post(
          `http://localhost:5000/api/message/send/${selectedConversation._id}`,
          { message },
          { headers: { token: sessionStorage.getItem("token") } }
        )
        .then((res) => {
          if (res.data.status === "error") {
            toast.error(res.data.message);
          }
          setMessages(...messages, res.data.data?.message);
        });
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
};

export default useSendMessage;
