import React from "react";
import { CheckOutlined } from "@ant-design/icons";
import "./MenuItem.css";

function MenuItem(props) {
  const { name, disabled, checked, onClick: handleClick } = props;
  return (
    <div
      className={`menu-item ${disabled ? "disabled" : ""}`}
      onClick={() => handleClick(name)}
    >
      {checked ? <CheckOutlined /> : ""}
      {name}
    </div>
  );
}

export default MenuItem;
