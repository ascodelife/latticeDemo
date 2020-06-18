import React, { Fragment } from "react";
import File from "../../components/fileBar/File";
import Folder from "../../components/fileBar/Folder";
import {  VIEW_LIST } from "../../constants/contextmenuConstants";
import "./FileView.css";

function FileView(props) {
  const {
    fileView,
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
    const arr = metaData.tags[tagName][typeName];
    if (arr && arr.length) {
      return (
        <Fragment>
          {arr.map((folderName, index) => (
            <Folder
              type={typeName}
              tabIndex={index + files.length}
              key={folderName}
              folder={metaData.tags[folderName]}
              onDoubleClick={() => handleFolderDoubleClick(folderName)}
            ></Folder>
          ))}
        </Fragment>
      );
    }
  }

  function renderFile() {
    return files.map((fileName, index) => (
      <File
        tabIndex={index}
        onFocus={() => handleFocus(fileName)}
        onBlur={handleBlur}
        key={metaData.files[fileName].name}
        file={metaData.files[fileName]}
        onContextMenu={(e) => handleContextMenu(e, fileName)}
      ></File>
    ));
  }

  return (
    <div
      className={`flex-container ${fileView === VIEW_LIST ? "column" : "row"}`}
    >
      {tagName && renderFolder(0)}
      {tagName && renderFolder(1)}
      {renderFile()}
    </div>
  );
}
export default FileView;
