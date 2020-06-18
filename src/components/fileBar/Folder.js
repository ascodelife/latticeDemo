import React from "react";

function Folder(props) {
  const {
    folder: { name },
    tabIndex,
    onDoubleClick,
    onFocus,
    onBlur,
  } = props;

  function chooseImg() {
    if (props.type) {
      return `/images/${props.type}Folder.png`;
    }
    return "/images/folder.png";
  }

  function getSymbol() {
    switch (props.type) {
      case "parents":
        return "父.";
      case "children":
        return "子.";
      default:
        return "";
    }
  }

  return (
    <div
      className="file"
      tabIndex={tabIndex}
      onDoubleClick={onDoubleClick}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <img className="file-image" src={chooseImg()} alt={name} />
      <div className="file-name">{`${getSymbol() + name}`}</div>
    </div>
  );
}

export default Folder;
