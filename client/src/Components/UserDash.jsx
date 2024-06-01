import React from "react";
import SideBar from "./SideBar";
import MessageContainer from "./MessageContainer";

const UserDash = () => {
 
  return (
    <div className="flex h-[600px] sm:h-[600px] md:h-[600px] lg:h-[600px] xl:h-[600px] rounded-lg overflow-hidden scrollbar-hidden bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SideBar />
      <MessageContainer />
    </div>
  );
};

export default UserDash;
