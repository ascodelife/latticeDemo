import React from "react";
import { List, Tag } from "antd";
import { TagsOutlined } from "@ant-design/icons";

function TagList(props) {
  const data = props.data;
  const title = props.title;
  return (
    <List
      className="tagList"
      size="small"
      header={<h3>{title}</h3>}
      bordered
      dataSource={Object.keys(data.tags)}
      renderItem={(item) => (
        <List.Item className="grid-container">
          <div className="tag">
            <TagsOutlined />
            {item}
          </div>
          <div className="files">
            {data.tags[item].files.map((file) => (
              <Tag key={file} color="blue">
                {file}
              </Tag>
            ))}
          </div>
        </List.Item>
      )}
    />
  );
}

export default TagList;
