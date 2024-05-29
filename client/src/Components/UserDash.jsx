import React from "react";
import SideBar from "./SideBar";
import MessageContainer from "./MessageContainer";

const UserDash = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden scrollbar-hidden bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SideBar />
      <MessageContainer />
    </div>
  );
};

export default UserDash;
