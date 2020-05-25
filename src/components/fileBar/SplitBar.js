import React from "react";
import {  RightOutlined, DownOutlined } from "@ant-design/icons";
import { Button } from "antd";
function SplitBar(props) {
  const { info, isUnfold, onClick } = props;

  return (
    <div className="splitBar">
      <div className="flex-contain">
        <div className="arrow" onClick={onClick}>
          {
            <Button
              type="link"
              icon={isUnfold ? <DownOutlined /> : <RightOutlined />}
            ></Button>
          }
        </div>
        <div className="info">{info}</div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default SplitBar;
