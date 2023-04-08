import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/chat.context";
import { Button } from "antd";
import { SettingOutlined, UserOutlined } from "@ant-design/icons";
import MoonImage from "../../assets/images/moon-dark-theme-svgrepo-com.png";
import SunImage from "../../assets/images/sun-svgrepo-com.png";

import "./navbar.css";

export default function Navbar() {
  const [isLight, setIsLight] = useContext(ThemeContext);

  return (
    <div className="centered">
      <div className="navbar">
        <Button className="btn" icon={<SettingOutlined />} />
        <Button className="btn userBtn" icon={<UserOutlined />} />
        <Button onClick={() => setIsLight(!isLight)}  className="btn themeBtn">
          <img
            className="themeImg"
            width="16px"
            height="16px"
            src={isLight ? SunImage : MoonImage}
          />
        </Button>
      </div>
    </div>
  );
}
