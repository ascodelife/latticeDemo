import React, { useRef, useEffect, useState } from "react";
import renderLattice from "../../canvas/lattice";
function Lattice(props) {
  const arrowStyle = { ...props.posData };
  const {
    handleNodeClick,
    handleNodeMouseover,
    handleNodeMouseout,
    nodeInfo,
  } = props;
  const ref = useRef();

  const [element, setElement] = useState();

  useEffect(() => {
    setElement(ref.current);
    return () => {
      //
    };
  }, []);

  return (
    <div className="lattice">
      <img
        className="arrow"
        style={arrowStyle}
        width="10%"
        src="/images/arrow.png"
        alt="箭头"
      />
      <div ref={ref}>
        {element
          ? renderLattice(
              element,
              handleNodeClick,
              handleNodeMouseover,
              handleNodeMouseout
            )
          : null}
        {/* <img src="/images/lattice.png" width="100%" alt="概念格" /> */}
      </div>
      <div>{nodeInfo}</div>
    </div>
  );
}

export default Lattice;
