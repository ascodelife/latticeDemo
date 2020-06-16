import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { setSeletedTag } from "../../actions/selectedAction";
import TagsTree from "./TagsTree";

function TagSidebar(props) {

  const [selectedKeys, setSelectedKeys] = useState([]);
  const [dropItemKey, setDropItemKey] = useState("");

  const {file: selectedFile } = useSelector(
    (state) => state.selected
  );
  const { tags: treeData } = useSelector((state) => state.metaData);

  const selectedFileTags = selectedFile && selectedFile.tags;

  const dispatch = useDispatch();

  useEffect(() => {
    const tagName = props.location.pathname.split("/").slice(-1);
    setSelectedKeys(tagName);
    dispatch(setSeletedTag(tagName));
    return () => {
      //
    };
  }, [dispatch, props.location.pathname]);

  function handleSelect(selectedKeys, info) {
    if (selectedKeys.length > 0) {
      props.history.push(`/tags/${selectedKeys[0]}`);
    }
  }

  // function handleNodeClick(tagName) {
  //   props.history.push(`/tags/${tagName}`);
  // }

  // function handleNodeMouseover(tagName) {
  //   const info = `指向节点${tagName}:{intents:[${step3Data.levelData[tagName].intents}] ,extents:[${step3Data.levelData[tagName].files}]}`;
  //   setNodeInfo(info);
  // }

  // function handleNodeMouseout() {
  //   const info = "";
  //   setNodeInfo(info);
  // }

  function handleDrop(e) {
    setDropItemKey("");
    // const tagName = e.currentTarget.dataset.key;
    Array.prototype.forEach.call(e.dataTransfer.files, (file) => {
      console.log(file);
    });
  }
  function handleDrag(e) {
    e.preventDefault();
    e.type === "dragenter" && setDropItemKey(e.currentTarget.dataset.key);
  }

  return (
    <div className="tagSidebar">
      <div className="text-center text-xl">分类标签</div>
      <div className="grid-container">
        <TagsTree
          className="tagTree"
          selectedKeys={selectedKeys}
          onSelect={handleSelect}
          treeData={treeData}
          selectedFileTags={selectedFileTags}
          handleDrop={handleDrop}
          handleDrag={handleDrag}
          dropItemKey={dropItemKey}
        />
        {/* <Carousel
          ref={carousel}
          className="carousel"
          effect="fade"
          dots={false}
        >

          <Lattice
            handleNodeClick={handleNodeClick}
            handleNodeMouseover={handleNodeMouseover}
            handleNodeMouseout={handleNodeMouseout}
            posData={posData[selectedTag]}
            nodeInfo={nodeInfo}
          />
        </Carousel> */}
      </div>
    </div>
  );
}

export default withRouter(TagSidebar);
