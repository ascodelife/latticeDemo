import React from "react";
import { Drawer, Button } from "antd";

function ControlSidebar(props) {
  return (
    <Drawer
      className="controlSidebar"
      title="控制面板"
      placement="right"
      closable
      onClose={props.onClose}
      visible={props.visible}
      width="50rem"
    >
      <Button onClick={props.onClick}>清空所有数据</Button>
    </Drawer>
  );
}

export default ControlSidebar;
