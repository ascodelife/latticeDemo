import React, { Fragment } from "react";
import FileBar from "../../components/fileBar/FileBar";
import File from "../../components/fileBar/File";
import Folder from "../../components/fileBar/Folder";

function FileGroupView(props) {
  const {
    name,
    files,
    metaData,
    tagName,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onContextMenu: handleContextMenu,
    onFolderDoubleClick: handleFolderDoubleClick,
  } = props;

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
              onDoubleClick={() => handleFolderDoubleClick(folderName)}
            ></Folder>
          ))}
        </FileBar>
      );
    }
  }

  return (
    <Fragment>
      {
        <FileBar info={`${name}的文件（${files.length}）`}>
          {files.map((fileName, index) => (
            <File
              tabIndex={index}
              onFocus={() => handleFocus(fileName)}
              onBlur={handleBlur}
              key={metaData.files[fileName].name}
              file={metaData.files[fileName]}
              onContextMenu={(e) => handleContextMenu(e, fileName)}
            ></File>
          ))}
        </FileBar>
      }
      {tagName && renderFolder(0)}
      {tagName && renderFolder(1)}
    </Fragment>
  );
}

export default FileGroupView;
