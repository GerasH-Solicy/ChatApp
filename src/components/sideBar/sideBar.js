import { useState } from "react";
import { Input } from "antd";
import { SearchOutlined, AppstoreOutlined  } from "@ant-design/icons";

import "./sidebar.css";

export default function SideBar() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="sidebar">
      <div className="headerPart">
        <Input
          placeholder="Search chat..."
          onChange={(evt) => setSearchText(evt.target.value)}
          value={searchText}
          className="headerInput"
          prefix={
            <SearchOutlined
              style={{
                color: "rgba(0,0,0,.45)",
              }}
            />
          }
        />
        <i className="searchIcon "></i>
      </div>
    </div>
  );
}
