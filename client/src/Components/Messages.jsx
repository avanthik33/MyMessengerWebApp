import { useEffect, useRef } from "react";
import useGetMessages from "../Hooks/useGetMessages";
import Message from "./Message";
import MessageSkelton from "./Skeltons/MessageSkelton";
import useListenMessages from "../Hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  const lastMessage = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessage.current?.scrollIntoView({ behavior: "auto" });
    }, 10);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading &&
        Array.from({ length: 5 }).map((_, idx) => <MessageSkelton key={idx} />)}
      {!loading && messages.length === 0 && (
        <>
          <h1 className="text-center ">
            Send a Message and Start a conversation
          </h1>
        </>
      )}
      {!loading &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessage}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};
export default Messages;
