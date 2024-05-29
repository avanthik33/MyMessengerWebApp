import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../Hooks/useGetConversations";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Conversations = () => {
  const { loading, data } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading && (
        <>
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        </>
      )}
      {data.map((value) => {
        return <Conversation key={value._id} conversation={value} />;
      })}
    </div>
  );
};

export default Conversations;
