import React, { useState } from "react";
import SplitBar from "./SplitBar";

function FileBar(props) {
  const { info, children } = props;
  const [isUnfold, setisUnfold] = useState(true);

  function splitBarClickHandle() {
    setisUnfold(!isUnfold);
  }

  return (
    <div className="fileBar">
      <SplitBar
        onClick={() => splitBarClickHandle()}
        isUnfold={isUnfold}
        info={info}
      />
      <div className={`flex-contain ${isUnfold ? "" : "hidden"}`}>
        {React.Children.map(children, (child) => (
          <>{child}</>
        ))}
      </div>
    </div>
  );
}

export default FileBar;
