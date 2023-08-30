import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data?.chatId), async (doc) => {
      doc?.exists() && setMessages(await doc?.data()?.messages);
    });
    return () => {
      unSub();
    };
  }, [data?.chatId, data?.toggle]);

  // console.log(data?.toggle);
  // console.log(data?.chatId);

  return (
    <div className="messages">
      {data?.messagesToggle && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          select the user to chat with{" "}
        </div>
      )}
      {messages?.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
