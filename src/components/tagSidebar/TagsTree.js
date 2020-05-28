import React from "react";
import { DownOutlined, TagOutlined } from "@ant-design/icons";
import { Tree } from "antd";

function TagsTree(props) {
  const {
    selectedKeys,
    onSelect,
    treeData,
    selectedFileTags,
    handleDrop,
    handleDrag,
    dropItemKey
  } = props;

  const { TreeNode } = Tree;

  function renderTreeNodes(treeData) {
    return treeData.map((item) => {
      return (
        <TreeNode
          key={item.key}
          title={
            <div
              className={`${
                item.key === dropItemKey ? "solid" : ""
              } full-width inline-block`}
              data-key={item.key}
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <TagOutlined />
              <span
                className={`padding ${
                  selectedFileTags && selectedFileTags.includes(item.title)
                    ? "solid"
                    : ""
                }`}
              >
                {item.title}
              </span>
            </div>
          }
        >
          {item.children ? renderTreeNodes(item.children) : ""}
        </TreeNode>
      );
    });
  }
  return (
    <div className="tagsTree">
      <Tree
        selectedKeys={selectedKeys}
        defaultExpandAll
        showIcon
        switcherIcon={<DownOutlined />}
        onSelect={onSelect}
      >
        {renderTreeNodes(treeData)}
      </Tree>
    </div>
  );
}
export default TagsTree;
