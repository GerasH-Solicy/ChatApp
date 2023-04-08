import { useContext } from "react";
import ChatItem from "../chatItem/chatitem";
import { ThemeContext } from "../../contexts/chat.context";

export default function ChatList() {
  const {isLigth} = useContext(ThemeContext)

  const chats = [
    {
      id: 1,
      name: "Friends",
      icon: null,
      unread: 12,
      lastMessage: {
        user: "John",
        message: "Good evening to all!!!",
        date: "12.02.23",
      },
    },
  ];
  return (
    <div className="chatList">
      {chats.map((chat) => {
        return <ChatItem chat={chat} />;
      })}
    </div>
  );
}
