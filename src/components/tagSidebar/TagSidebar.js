import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { Carousel, Switch } from "antd";

import { setSeletedTag } from "../../actions/tagActions";
import TagsTree from "./TagsTree";
import Lattice from "./Lattice";
import step1Data from "../../data/step1Data";
import step2Data from "../../data/step2Data";
import step3Data from "../../data/step3Data";
import { posData } from "../../data/posData";

function TagSidebar(props) {
  const carousel = useRef();

  const [selectedKeys, setSelectedKeys] = useState([]);
  const [checked, setChecked] = useState(false);
  const [nodeInfo, setNodeInfo] = useState();
  const [dropItemKey, setDropItemKey] = useState("");

  const selectedTag = useSelector((state) => state.selectedTag);
  const { current } = useSelector((state) => state.step);
  const selectedFile = useSelector((state) => state.selectedFile);
  const selectedFileTags = selectedFile && selectedFile.tags;

  const treeData =
    current === 0
      ? step1Data.treeData
      : current === 1
      ? step2Data.treeData
      : step3Data.treeData;

  const dispatch = useDispatch();

  useEffect(() => {
    const tagName = props.location.pathname.split("/").slice(-1);
    setSelectedKeys(tagName);
    dispatch(setSeletedTag(tagName));
    return () => {
      //
    };
  }, [dispatch, props.location.pathname]);

  useEffect(() => {
    if (carousel.current) {
      const index = checked ? 1 : 0;
      carousel.current.innerSlider.slickGoTo(index);
    }
    return () => {};
  }, [checked]);

  useEffect(() => {
    if (current !== 2) {
      setChecked(0);
    }
    return () => {};
  }, [current]);

  function handleSelect(selectedKeys, info) {
    if (selectedKeys.length > 0) {
      dispatch(setSeletedTag(info.selectedNodes[0]));
      props.history.push(`/tags/${selectedKeys[0]}`);
    }
  }

  function handleChange(checked) {
    setChecked(checked);
  }

  function handleNodeClick(tagName) {
    props.history.push(`/tags/${tagName}`);
  }

  function handleNodeMouseover(tagName) {
    const info = `指向节点${tagName}:{intents:[${step3Data.levelData[tagName].intents}] ,extents:[${step3Data.levelData[tagName].files}]}`;
    setNodeInfo(info);
  }

  function handleNodeMouseout() {
    const info = "";
    setNodeInfo(info);
  }

  function handleDrop(e) {
    setDropItemKey("");
    const tagName = e.currentTarget.dataset.key;
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
      <div className="text-center text-xl">
        {checked ? "概念格" : "分类标签"}
      </div>
      <div className="grid-container">
        <Carousel
          ref={carousel}
          className="carousel"
          effect="fade"
          dots={false}
        >
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
          <Lattice
            handleNodeClick={handleNodeClick}
            handleNodeMouseover={handleNodeMouseover}
            handleNodeMouseout={handleNodeMouseout}
            posData={posData[selectedTag]}
            nodeInfo={nodeInfo}
          />
        </Carousel>
        {current === 2 ? (
          <div className="action">
            <span className={checked ? "" : "highlight"}>标签视图</span>
            <Switch onChange={handleChange} />
            <span className={checked ? "highlight" : ""}>概念格视图</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default withRouter(TagSidebar);
