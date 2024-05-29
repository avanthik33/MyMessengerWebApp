import React, { useState } from "react";
import { MdPersonSearch } from "react-icons/md";
import useGetConversations from "../Hooks/useGetConversations";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const Search = () => {
  const [input, setInput] = useState("");
  const { data } = useGetConversations();
  const { setSelectedConversation } = useConversation();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input || !data) return; // Check if input or data is missing
    const conversation = data.find((c) =>
      c.firstName.toLowerCase().includes(input.toLowerCase())
    );

    if (!conversation) {
      toast.error("No user found");
    } else {
      setSelectedConversation(conversation);
      setInput("");
    }
  };

  return (
    <div className="w-[200px] sm:w-[250px] md:w-[400px] lg:w-[400px] xl:w-[400px]">
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered w-[100px] sm:w-[150px] md:w-[300px] lg:w-[300px] xl:w-[300px]"
          value={input}
          onChange={handleInput}
        />
        <button type="submit" className="btn bg-yellow-500 text-white">
          <MdPersonSearch className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
};

export default Search;
