import { useContext } from "react";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "./chatheader.css";
import { ChatContext } from "../../contexts/chat.context";

export default function ChatHeader() {
  const chats = [
    {
      id: 1,
      name: "Friends",
      icon: "",
      unread: 12,
      lastMessage: {
        user: "John",
        message: "Good evening to all!!!",
        date: "12.02.23",
      },
    },
    {
      id: 2,
      name: "Work",
      icon: "https://www.pngkit.com/png/full/128-1284523_group-chat-icon-google-group-chat-icon.png",
      unread: 2,
      lastMessage: {
        user: "Lili",
        message: "There are many works that will be done today!!!",
        date: "18.02.23",
      },
      members: 10,
    },
  ];

  const [selectedChat, setChat] = useContext(ChatContext);

  return (
    <div className="chatHeader">
      <div className="chatLeftPart">
        <img className="selectedChatIcon" src={chats[1].icon} />
        <div>
          <h3 className="chatName">{chats[1].name}</h3>
          <span className="members">{chats[1].members} members</span>
        </div>
      </div>
      <div className="chatRightpart">
        <Button
          danger
          onClick={() => setChat(null)}
          icon={<CloseOutlined />}
        ></Button>
      </div>
    </div>
  );
}
