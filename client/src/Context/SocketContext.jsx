import React, { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      const newSocket = io("http://localhost:5000", {
        query: {
          userId: userId,
        },
      });
      setSocket(newSocket);
      newSocket.on("getOnlineUsers", (user) => {
        setOnlineUsers(user);
      });
      return () => {
        newSocket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [userId]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
