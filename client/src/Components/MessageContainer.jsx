import React, { useEffect } from "react";
import useConversation from "../zustand/useConversation";
import NoSelectedChat from "./NoSelectedChat";
import useSendMessage from "../Hooks/useSendMessage";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    setSelectedConversation(null);
  }, []);

  return (
    <div className="w-[400px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[800px] flex flex-col">
      {!selectedConversation ? (
        <NoSelectedChat />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.firstName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
