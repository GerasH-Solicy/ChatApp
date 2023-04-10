import { ChatContext } from '../../contexts/chat.context';
import { Badge, Avatar } from "antd";
import DefaultChatIcon from "../../assets/images/chat-conversation-svgrepo-com.png";
import { useContext } from "react";


import "./chatitem.css";

function formatLastMessage(mess){
  if (mess.length > 30){
    return mess.slice(0, 27) + '...'
  }
  return mess;
}

export default function ChatItem({ chat }) {
  const [selectedChat, setChat] = useContext(ChatContext);

  return (
    <div className={`chatItem ${selectedChat === chat.id && "selected"}`} onClick={() => setChat(chat.id)}>
      <div className="chatIcon">
        <img src={chat.icon ? chat.icon : DefaultChatIcon} />
      </div>
      <div className="chatInfo">
        <div className="leftPart">
          <h3 className="chatName">{chat.name}</h3>
          <p className="lastMessage">
            <b>{chat.lastMessage.user}: </b>
            <span> {formatLastMessage(chat.lastMessage.message)}</span>
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
