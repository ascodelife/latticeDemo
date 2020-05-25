import React from "react";

function Tags(props) {
  const { name, files } = props.tag;

  return (
    <div className="tags margin-sl text-center">
      <div className="pointer padding-sl round">
        {name}:文件数量{files.length}
      </div>
    </div>
  );
}

export default Tags;
