import { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../Hooks/useSendMessage";
import CircularProgress from "@mui/material/CircularProgress";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleInput = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) {
      return;
    }
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 h-14 text-white bg-gray-800 border-gray-400"
          placeholder="Message"
          value={message}
          name="message"
          onChange={handleInput}
          autoComplete="off"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <IoSend className="text-white text-xl" />
          )}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
