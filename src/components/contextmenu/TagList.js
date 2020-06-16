import React from "react";
import { Tag } from "antd";
const { CheckableTag } = Tag;

function TagsList(props) {
  const { tagsData,selectedTags,onChange } = props;

  return (
    <>
      <span>选择文件标签:</span>
      {tagsData.map((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={(checked) => onChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </>
  );
}

export default TagsList;