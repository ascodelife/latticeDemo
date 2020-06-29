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
  FILE_TARGET,
  TREE_NODE_TARGET,
  REMOVE_FILE,
  ADD_TAG,
  ADD_SUB_TAG,
  REMOVE_TAG,
  ADD_FILE,
  EDIT_TAG,
  VIEW,
  VIEW_TILE,
  VIEW_LIST,
  VIEW_GROUP,
} from "../../constants/contextmenuConstants";
import menuData from "../../data/menuData";
import { openDialog } from "../../utils/openDialog";
import OverrideModal from "../modal/OverrideModal";
import Menu from "./Menu/Menu";
import TagList from "./TagList";

function Contextmenu(props) {
  const { pos, data, target, show } = props;

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [warning, setWarning] = useState("");
  //当前右键菜单所处的树节点标签
  const [treeTags, setTreeTags] = useState({});
  //批量选择添加文件
  const [selectAddfiles, setSelectAddfiles] = useState([]);
  //批量文件中的重复文件
  const [duplicateFiles, setDuplicateFiles] = useState([]);
  //将要添加的文件
  const [willAddFiles, setWillAddFiles] = useState([]);
  //将要添加的文件的选中标签
  const [selectedTags, setSelectedTags] = useState([]);

  const { tags, files, apiState, error } = useSelector(
    (state) => state.metaData
  );
  const { fileView } = useSelector((state) => state.view);

  const inputRef = useRef();

  //异步请求结果
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
    if (target === GLOBAL_TARGET) {
      menuData[target] = menuData[target].map((item) => {
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
    }
    return () => {};
  }, [fileView, target]);

  //将要添加的文件改变
  useEffect(() => {
    if (willAddFiles.length) {
      //当菜单在树节点触发时，默认选中标签为当前树标签
      if (target === TREE_NODE_TARGET) {
        setSelectedTags([data.name]);
      } else if (target === FILE_TARGET) {
        //当菜单在文件中触发时，默认选中标签为文件标签
        setSelectedTags(files[data.name].tags);
      }
      setVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [willAddFiles]);

  //菜单点击事件处理
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
        let selectAddfiles = openDialog();
        setSelectAddfiles(selectAddfiles);
        //检测是否有重复文件
        if (selectAddfiles && selectAddfiles.length) {
          const duplicateFiles = selectAddfiles.filter(
            (fileName) => files[fileName]
          );
          if (duplicateFiles.length) {
            setDuplicateFiles(duplicateFiles);
          }
        }
        break;
      case EDIT_TAG:
        setWillAddFiles([data.name]);
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

  //弹框确认
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
        dispatch(addTag(formatValue, data.parents));
        break;
      case ADD_SUB_TAG:
        dispatch(addTag(formatValue, [data.name]));
        break;
      case REMOVE_TAG:
        dispatch(removeTag(data.name));
        break;
      case ADD_FILE:
      case EDIT_TAG:
        dispatch(addFiles(willAddFiles, selectedTags));
        break;
      case REMOVE_FILE:
        // console.log(data);
        dispatch(removeFile(data.name));
        break;
      default:
    }
  }

  //关闭异步弹框
  function handleCancel() {
    setVisible(false);
  }

  //输入框的值改变
  function handleChange(e) {
    setValue(e.target.value);
  }

  //选中标签改变
  function handleTagsChange(tag, checked) {
    setSelectedTags(
      checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag)
    );
  }

  //处理重复的文件
  function handleOverrideClick(key) {
    switch (key) {
      case "overrideAll":
        setWillAddFiles([...selectAddfiles]);
        break;
      case "skipAll":
        setWillAddFiles(
          selectAddfiles.filter(
            (addFileName) => duplicateFiles.indexOf(addFileName) === -1
          )
        );
        break;
      case "every":
        break;
      default:
    }
    handleOverrideClose();
  }

  //关闭重复弹框
  function handleOverrideClose() {
    setDuplicateFiles([]);
  }

  return (
    <>
      {show && (
        <Menu
          pos={pos}
          menuData={menuData[target]}
          onClick={handleClick}
          style={props.style}
        />
      )}
      {/* 异步弹框 */}
      <Modal
        // title={menuData[target][key]}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {key === ADD_TAG || key === ADD_SUB_TAG ? ( //添加标签或添加子标签弹框
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
        ) : key === REMOVE_TAG || key === REMOVE_FILE ? ( //F删除标签或删除文件弹框
          <span>是否删除</span>
        ) : key === ADD_FILE || key === EDIT_TAG ? ( //添加文件或编辑文件标签
          <TagList
            tagsData={Object.keys(treeTags)}
            selectedTags={selectedTags}
            onChange={handleTagsChange}
          />
        ) : (
          ""
        )}
      </Modal>
      {/* 同步弹框 */}
      <OverrideModal
        duplicateFiles={duplicateFiles}
        onClose={handleOverrideClose}
        onClick={handleOverrideClick}
      />
    </>
  );
}

export default Contextmenu;
