import React from "react";
import { Redirect } from "react-router-dom";
import FileBar from "../../components/fileBar/FileBar";
import File from "../../components/fileBar/File";
import Folder from "../../components/fileBar/Folder";

import { useSelector, useDispatch } from "react-redux";

import { FILE_TARGET } from "../../constants/contextmenuConstants";
import { setSeletedFile } from "../../actions/selectedAction";
import { showContextmenu } from "../../actions/contextmenuActions";

function FilesScreen(props) {
  const dispatch = useDispatch();

  const metaData = useSelector((state) => state.metaData);
  const tagName = props.match.params.tagName;

  if (!metaData.tags[tagName] && tagName) {
    return <Redirect to="/" />;
  }

  const { name, files } = tagName
    ? metaData.tags[tagName]
    : { name: "所有", files: Object.keys(metaData.files) };
  
  function onContextMenu(e, fileName) {
    e.stopPropagation();
    dispatch(
      showContextmenu(e.pageX, e.pageY, FILE_TARGET, { name: fileName })
    );
  }

  function renderFolder(type) {
    const typeName = type === 0 ? "parents" : "children";
    const info = `${name}${type === 0 ? "父" : "子"}目录`;
    const arr = metaData.tags[tagName][typeName];
    if (arr && arr.length) {
      return (
        <FileBar info={info}>
          {arr.map((folderName, index) => (
            <Folder
              tabIndex={index + files.length}
              key={folderName}
              folder={metaData.tags[folderName]}
              onDoubleClick={() => props.history.push(`/tags/${folderName}`)}
            ></Folder>
          ))}
        </FileBar>
      );
    }
  }

  return (
    <div>
      <h3 className="text-center">{name}</h3>
      {
        <FileBar info={`${name}的文件（${files.length}）`}>
          {files.map((fileName, index) => (
            <File
              tabIndex={index}
              onFocus={() => dispatch(setSeletedFile(metaData.files[fileName]))}
              onBlur={() => dispatch(setSeletedFile(null))}
              key={metaData.files[fileName].name}
              file={metaData.files[fileName]}
              onContextMenu={(e) => onContextMenu(e, fileName)}
            ></File>
          ))}
        </FileBar>
      }
      {tagName && renderFolder(0)}
      {tagName && renderFolder(1)}
    </div>
  );
}

export default FilesScreen;
