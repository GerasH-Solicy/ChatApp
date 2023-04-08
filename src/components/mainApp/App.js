import { useContext } from "react";
import ChatList from "../chatList/chatlist";
import Navbar from "../navbar/navbar";
import SideBar from "../sideBar/sideBar";
import { ThemeProvider } from "../../contexts/chat.context";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <div className="navbarPart">
          <Navbar />
        </div>
        <div className="sidebarPart">
          <SideBar />
          <ChatList />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
