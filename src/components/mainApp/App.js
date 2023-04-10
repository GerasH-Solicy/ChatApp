import { useContext } from "react";
import ChatList from "../chatList/chatlist";
import Navbar from "../navbar/navbar";
import SideBar from "../sideBar/sideBar";
import Chat from "../chat/chat";
import { ThemeProvider } from "../../contexts/theme.context";
import { ChatProvider } from "../../contexts/chat.context";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ChatProvider>
          <div className="navbarPart">
            <Navbar />
          </div>
          <div className="sidebarPart">
            <SideBar />
            <ChatList />
          </div>
          <div className="chatPart">
            <Chat />
          </div>
        </ChatProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
