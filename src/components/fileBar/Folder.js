import React from "react";

function Folder(props) {
  const {
    folder: { name },
    tabIndex,
    onDoubleClick,
    onFocus,
    onBlur,
  } = props;
  return (
    <div
      className="file"
      tabIndex={tabIndex}
      onDoubleClick={onDoubleClick}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <img className="file-image" src="/images/folder.png" alt={name} />
      <div className="file-name">{name}</div>
    </div>
  );
}

export default Folder;
