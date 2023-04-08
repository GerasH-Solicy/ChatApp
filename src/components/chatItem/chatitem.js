import { Badge, Avatar } from "antd";
import DefaultChatIcon from "../../assets/images/chat-conversation-svgrepo-com.png";

import "./chatitem.css";

export default function ChatItem({ chat }) {
  return (
    <div className="chatItem">
      <div className="chatIcon">
        <img src={chat.icon ? chat.icon : DefaultChatIcon} />
      </div>
      <div className="chatInfo">
        <div className="leftPart">
          <h3 className="chatName">{chat.name}</h3>
          <p className="lastMessage">
            <b>{chat.lastMessage.user}: </b>
            <span> {chat.lastMessage.message}</span>
          </p>
        </div>
        <div className="rightPart">
          <p className="date">{chat.lastMessage.date}</p>
          {chat.unread > 0 && (
            <Badge count={chat.unread} overflowCount={10}></Badge>
          )}
        </div>
      </div>
    </div>
  );
}
