import React from "react";
import Search from "./Search";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const SideBar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col w-[200px] sm:w-[250px] md:w-[400px] lg:w-[400px] xl:w-[400px]">
      <Search />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default SideBar;
