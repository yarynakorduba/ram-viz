import React from "react";

import Memory from "../Memory";
import BEM from "../../helpers/BEM";
import MemoryControls from "../MemoryControls";
import VisualizationSettings from "../VisualizationSettings";

import "./RAMVisualization.scss";

const b = BEM("RAMVisualization");

const RAMVisualization = () => {
  return (
    <div className={b()}>
      <div className={b("caption")}>
        <h1 className={b("header")}>Random Access Memory [RAM]</h1>
        <VisualizationSettings />
      </div>
      <div className={b("content")}>
        <div className={b("pins")}>
          <MemoryControls />
        </div>
        <div className={b("memory")}>
          <Memory />
        </div>
      </div>
      {/* <div className={b("notes")}>
        <div>＊ LSB - Least Significant Bit (right-most bit)</div>
        <div>＊ MSB - Most Significant Bit (left-most bit)</div>
      </div> */}
    </div>
  );
};

export default RAMVisualization;
