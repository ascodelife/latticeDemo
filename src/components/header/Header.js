import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
function Header(props) {
  const { handlePrimaryClick } = props;
  return (
    <div className="flex-contain">
      <Link to="/">
        <LeftOutlined /> 显示所有文件
      </Link>
      <h3>{`示例程序`}</h3>
      <Button type="primary" onClick={handlePrimaryClick}>
        打开控制面板
      </Button>
    </div>
  );
}

export default Header;
