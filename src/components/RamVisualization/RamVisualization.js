import React from "react";
import Memory from "../Memory";
import BEM from "../../helpers/BEM";

import "./RamVisualization.scss";
import MemoryControls from "../MemoryControls";
import VisualizationSettings from "../VisualizationSettings";

const b = BEM("RamVisualization");

function RamVisualization() {
  return (
    <div className={b()}>
      <div className={b("caption")}>
        <h1 className={b("header")}>RAM Visualization</h1>
        <VisualizationSettings />
      </div>
      <div className={b("visualization")}>
        <div className={b("pins")}>
          <MemoryControls />
        </div>
        <div className={b("memory")}>
          <Memory />
        </div>
      </div>
      <div className={b("notes")}>
        <div>＊ LSB - Least Significant Bit (right-most bit)</div>
        <div>＊ MSB - Most Significant Bit (left-most bit)</div>
      </div>
    </div>
  );
}

export default RamVisualization;
