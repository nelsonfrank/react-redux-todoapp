import React, { useState } from "react";
import { PageHeader, Avatar, Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Button from "../components/button";
import SearchInputField from "../components/search-input";
import "./Header.less";

const Header = () => {
  const [searchInput, showSearchInput] = useState(false);

  const handleSearchInput = () => {
    showSearchInput(true);
  };

  return (
    <div>
      <div>
        <Card className="header-avatar-search">
          {searchInput ? (
            <SearchInputField />
          ) : (
            <SearchOutlined
              style={{ marginRight: 10, marginTop: 10 }}
              onClick={handleSearchInput}
            />
          )}
          <Avatar
            // size="small"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </Card>
      </div>
      <PageHeader
        title="My Tasks"
        extra={<Button shape="round">New Task</Button>}
      />
    </div>
  );
};

export default Header;
