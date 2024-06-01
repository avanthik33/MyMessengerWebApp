import axios from "axios";
import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
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
            setMessages(res.data.data);
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
    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
};

export default useGetMessages;
