import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import FileView from "./FileView";
import FileGroupView from "./FileGroupView";

import { FILE_TARGET } from "../../constants/contextmenuConstants";
import { setSeletedFile } from "../../actions/selectedAction";
import { showContextmenu } from "../../actions/contextmenuActions";

import { VIEW_GROUP } from "../../constants/contextmenuConstants";

function FilesScreen(props) {
  const dispatch = useDispatch();

  const { fileView } = useSelector((state) => state.view);
  const metaData = useSelector((state) => state.metaData);
  const tagName = props.match.params.tagName;

  if (!metaData.tags[tagName] && tagName) {
    return <Redirect to="/" />;
  }

  const { name, files } = tagName
    ? metaData.tags[tagName]
    : { name: "所有", files: Object.keys(metaData.files) };

  function handleFocus(fileName) {
    dispatch(setSeletedFile(metaData.files[fileName]));
  }

  function handleBlur() {
    dispatch(setSeletedFile(null));
  }

  function handleContextMenu(e, fileName) {
    e.stopPropagation();
    dispatch(
      showContextmenu(e.pageX, e.pageY, FILE_TARGET, { name: fileName })
    );
  }

  function handleFolderDoubleClick(folderName) {
    props.history.push(`/tags/${folderName}`);
  }

  return (
    <div>
      <h3 className="text-center">{name}</h3>
      {fileView === VIEW_GROUP ? (
        <FileGroupView
          name ={name}
          files={files}
          metaData={metaData}
          tagName={tagName}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onContextMenu={handleContextMenu}
          onFolderDoubleClick={handleFolderDoubleClick}
        />
      ) : (
        <FileView
          fileView={fileView}
          files={files}
          metaData={metaData}
          tagName={tagName}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onContextMenu={handleContextMenu}
          onFolderDoubleClick={handleFolderDoubleClick}
        />
      )}
    </div>
  );
}

export default FilesScreen;
