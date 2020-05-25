import React from "react";
import { DownOutlined, TagOutlined } from "@ant-design/icons";
import { Tree } from "antd";

function TagsTree(props) {
  const { selectedKeys, onSelect, treeData, selectedFileTags } = props;

  const { TreeNode } = Tree;

  function renderTreeNodes(treeData) {
    return treeData.map((item) => {
      return (
        <TreeNode
          key={item.key}
          title={
            <span
              className={`padding ${
                selectedFileTags && selectedFileTags.includes(item.title)
                  ? "solid"
                  : ""
              }`}
            >
              {item.title}
            </span>
          }
          icon={<TagOutlined />}
        >
          {item.children ? renderTreeNodes(item.children) : ""}
        </TreeNode>
      );
    });
  }
  return (
    <div>
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
