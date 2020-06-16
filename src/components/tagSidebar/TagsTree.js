import React from "react";
import { DownOutlined, TagOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import { useDispatch } from "react-redux";
import { showContextmenu } from "../../actions/contextmenuActions";
import { TREE_NODE_TARGET } from "../../constants/contextmenuConstants";

function TagsTree(props) {
  const {
    selectedKeys,
    onSelect,
    treeData,
    selectedFileTags,
    handleDrop,
    handleDrag,
    dropItemKey,
  } = props;

  const dispatch = useDispatch();

  const { TreeNode } = Tree;

  function handleRightClick({ event, node }) {
    event.stopPropagation();
    dispatch(
      showContextmenu(
        event.pageX,
        event.pageY,
        TREE_NODE_TARGET,
        treeData[node.key]
      )
    );
  }

  function renderTreeNodes(data) {
    // console.log(data);
    return data.map((tagName, index) => {
      return (
        <TreeNode
          key={tagName}
          title={
            <div
              tabIndex={index}
              className={`${
                tagName === dropItemKey ? "solid" : ""
              } full-width inline-block`}
              data-key={tagName}
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <TagOutlined />
              <span
                className={`padding ${
                  selectedFileTags && selectedFileTags.includes(tagName)
                    ? "solid"
                    : ""
                }`}
              >
                {tagName}
              </span>
            </div>
          }
        >
          {treeData[tagName].children.length &&
            renderTreeNodes(treeData[tagName].children.filter(childTagName=>!treeData[childTagName].lattice))}
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
        onRightClick={handleRightClick}
      >
        {renderTreeNodes(
          Object.keys(treeData).filter((tag) => !treeData[tag].parents.length)
        )}
      </Tree>
    </div>
  );
}
export default TagsTree;
