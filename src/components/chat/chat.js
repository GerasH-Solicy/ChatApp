import { useContext, useEffect } from "react";
import { ChatContext } from "../../contexts/chat.context";

import "./chat.css"
import ChatHeader from "../chatHeader/chatheader";
import ChatFooter from "../chatFooter/chatfooter";
import ChatBody from "../chatBody/chatbody";

export default function Chat() {
  const [selectedChat, setChat] = useContext(ChatContext);

  return !selectedChat ? (
    <div className="emptyChat">
      <p>Select chat for displaying conversation.</p>
    </div>
  ) : (
    <div>
      <ChatHeader/>
      <ChatBody/>
      <ChatFooter/>
    </div>
  );
}
