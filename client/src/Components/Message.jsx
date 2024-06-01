import useConversation from "../zustand/useConversation";
import Avatar from "@mui/material/Avatar";
import { format } from "date-fns";
import { useAuthContext } from "../Context/AuthContext";

const Message = ({ message }) => {
  const { selectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  const fromMe = message.sender_id === authUser._id;

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleColor = fromMe ? "bg-green-700" : "bg-";

  const formattedTime = format(new Date(message.createdAt), "p");

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Avatar src="/broken-image.jpg" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleColor} pb-2`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};
export default Message;
