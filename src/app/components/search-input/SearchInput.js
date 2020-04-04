import React from "react";
import { Input } from "antd";
import "./SearchInput.less";

const SearchInput = ({ ...others }) => {
  return <Input placeholder="Search..." {...others} className="search-input" />;
};

export default SearchInput;
