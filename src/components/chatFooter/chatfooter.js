import { Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";

import "./chatfooter.css"

export default function ChatFooter() {
  return (
    <div className="chatfooter">
      <Input placeholder="Type a message..."/>
      <Button type="" className="sendBtn" icon={<SendOutlined />}>Send</Button>
    </div>
  );
}
