import React from "react";
function File(props) {
  const {
    file: { name },
    tabIndex,
    onFocus,
    onBlur,
  } = props;
  return (
    <div
      className="file"
      tabIndex={tabIndex}
      onFocus={onFocus}
      onBlur={onBlur}
      onContextMenu={props.onContextMenu}
    >
      <img className="file-image" src="/images/file.png" alt={name} />
      <div className="file-name">{name}</div>
    </div>
  );
}

export default File;
