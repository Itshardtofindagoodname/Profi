import React, { useState } from "react";
import "react-chat-elements/dist/main.css";
import { MessageList } from "react-chat-elements";
import axios from "axios";

function Home() {
  const [chats, setChat] = useState([]);
  const [message, setMessage] = useState("");

  async function sendChat(text) {
    if (text.trim() === "") return;
    const msgId = crypto.randomUUID();
    const botId = crypto.randomUUID();
    console.log({ botId });
    setChat((prev) => [
      ...prev,
      { id: msgId, text: text, title: "You", position: "right", type: "text",titleColor:"blue" },
      {
        id: botId,
        text: "Typing....",
        title: "PlanIt",
        position: "left",
        type: "text",
        titleColor:"black"
      },
    ]);

    const res = await axios.get(`http://127.0.0.1:5000/chat/1?q=${text}`);
    const data = await res.data;

    setChat((prev) => {
      const newChats = prev.map((chat) => {
        if (chat.id === botId) return { ...chat, text: data.output_text };
        return chat;
      });
      console.log({ newChats });
      return newChats;
    });
  }
  return (
    <div className="m-2 h-full">
      <div className="w-full h-full p-6 bg-white shadow-lg rounded-xl">
        <div className="flex flex-col h-full">
          <span className="text-gray-700 text-5xl font-bold">Chat it up</span>
          <span className="text-md font-light text-gray-400 mb-2">
            Talk with your given Data
          </span>
          <div className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-lg h-[500px] overflow-y-scroll">
            {/* // className:"[&>*]:bg-green-300" */}
            <MessageList
              className="message-list"
              lockable={true}
              toBottomHeight={"100%"}
              dataSource={chats}
            />
          </div>
          <div className="flex flex-row gap-2">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              className="w-full no-scrollbar px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              rows="1"
            ></textarea>
            <button
              onClick={(e) => sendChat(message)}
              type="button"
              className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-20 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
