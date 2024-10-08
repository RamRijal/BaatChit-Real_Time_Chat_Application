"use Client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Chat = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chats");
    console.log(data);
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((c) => {
        return <div key={c._id}>{c.chatName}</div>;
      })}
    </div>
  );
};

export default Chat;
