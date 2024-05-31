import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import { useSocketContext } from "../Context/SocketContext";

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const [onlineUsersSet, setOnlineUsersSet] = useState(new Set(onlineUsers));
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    setOnlineUsersSet(new Set(onlineUsers));
  }, [onlineUsers]);

  useEffect(() => {
    setIsOnline(onlineUsersSet.has(conversation._id));
  }, [conversation._id, onlineUsersSet]);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:glass  rounded p-2 py-1 cursor-pointer
          ${
            isSelected
              ? "bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border border-white border-opacity-30"
              : ""
          }
        `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="text-black-800">{conversation.firstName}</p>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversation;
