import React, { useState, useRef, useEffect } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addTag,
  removeTag,
  addFiles,
  removeFile,
} from "../../actions/metaDataActions";
import { REQUEST, SUCCESS, FAIL } from "../../constants/apiConstants";
import { hideContextmenu } from "../../actions/contextmenuActions";
import { setFileView } from "../../actions/viewActions";
import {
  GLOBAL_TARGET,
  TREE_NODE_TARGET,
  REMOVE_FILE,
  VIEW,
  VIEW_TILE,
  VIEW_LIST,
  VIEW_GROUP,
} from "../../constants/contextmenuConstants";
import menuData from "../../data/menuData";
import { openDialog } from "../../utils/openDialog";
import Menu from "./Menu/Menu";
import TagList from "./TagList";
import {
  ADD_TAG,
  ADD_SUB_TAG,
  REMOVE_TAG,
  ADD_FILE,
} from "../../constants/contextmenuConstants";

function Contextmenu(props) {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [warning, setWarning] = useState("");
  const [selectFiles, setSelectFiles] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [treeTags, setTreeTags] = useState({});

  const { tags, apiState, error } = useSelector((state) => state.metaData);
  const { fileView } = useSelector((state) => state.view);

  const inputRef = useRef();

  useEffect(() => {
    if (apiState === REQUEST) {
      setConfirmLoading(true);
    } else if (apiState === SUCCESS) {
      setValue("");
      setConfirmLoading(false);
      setVisible(false);
    } else if (apiState === FAIL) {
      setValue("");
      setConfirmLoading(false);
      setVisible(false);
    }
    return () => {};
  }, [apiState, error]);

  useEffect(() => {
    //先筛选掉格标签
    let treeTags = {};
    Object.keys(tags).forEach((tagName) => {
      if (!tags[tagName].lattice) {
        treeTags[tagName] = tags[tagName];
      }
    });
    setTreeTags(treeTags);
    return () => {};
  }, [tags]);

  //切换查看子菜单勾选
  useEffect(() => {
    if (props.target === GLOBAL_TARGET) {
      menuData[props.target] = menuData[props.target].map((item) => {
        if (item.name === VIEW) {
          item.subItem = item.subItem.map((subItem) => {
            if (subItem.name === fileView) {
              return { ...subItem, checked: true };
            }
            return { ...subItem, checked: false };
          });
        }
        return item;
      });
      console.log(menuData[props.target]);
    }
    return () => {};
  }, [fileView, props.target]);

  function handleClick(key) {
    setKey(key);
    switch (key) {
      case ADD_TAG:
      case ADD_SUB_TAG:
      case REMOVE_TAG:
      case REMOVE_FILE:
        setVisible(true);
        break;
      case ADD_FILE:
        const files = openDialog();
        if (files && files.length) {
          setSelectFiles(files);
          //默认选中标签为当前树标签
          if (props.target === TREE_NODE_TARGET) {
            setSelectedTags([props.data.name]);
          }
          setVisible(true);
        }
        break;
      case VIEW_TILE:
      case VIEW_LIST:
      case VIEW_GROUP:
        dispatch(setFileView(key));
        break;
      default:
    }
    dispatch(hideContextmenu());
  }

  function handleOk() {
    let formatValue = "";
    if (key === ADD_TAG || key === ADD_SUB_TAG) {
      formatValue = value.trim();
      if (formatValue === "") {
        setWarning("标签名不能为空");
        return;
      }
      if (treeTags[formatValue]) {
        setWarning("标签名不能重复");
        return;
      }
    }
    setConfirmLoading(true);
    switch (key) {
      case ADD_TAG:
        dispatch(addTag(formatValue, props.data.parents));
        break;
      case ADD_SUB_TAG:
        dispatch(addTag(formatValue, [props.data.name]));
        break;
      case REMOVE_TAG:
        dispatch(removeTag(props.data.name));
        break;
      case ADD_FILE:
        dispatch(addFiles(selectFiles, selectedTags));
        break;
      case REMOVE_FILE:
        console.log(props.data);
        dispatch(removeFile(props.data.name));
        break;
      default:
    }
  }

  function handleCancel() {
    setVisible(false);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleTagsChange(tag, checked) {
    setSelectedTags(
      checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag)
    );
  }

  return (
    <>
      <Menu
        menuData={menuData[props.target]}
        onClick={handleClick}
        style={props.style}
      />
      <Modal
        // title={menuData[props.target][key]}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {key === ADD_TAG || key === ADD_SUB_TAG ? (
          <>
            <p>请输入标签名：</p>
            <input
              ref={inputRef}
              type="text"
              value={value}
              onChange={handleChange}
            />
            <p>{warning}</p>
          </>
        ) : key === REMOVE_TAG || key === REMOVE_FILE ? (
          <span>是否删除</span>
        ) : (
          <TagList
            tagsData={Object.keys(treeTags)}
            selectedTags={selectedTags}
            onChange={handleTagsChange}
          />
        )}
      </Modal>
    </>
  );
}

export default Contextmenu;
