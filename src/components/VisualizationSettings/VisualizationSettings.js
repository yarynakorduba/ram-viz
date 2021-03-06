import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useAction } from "../../hooks/reactRedux.hks";
import {
  setIsPinNotationClassical,
  setIsTactingEnabled,
  setMemoryDisplayType,
  setIsRasCasEnabled,
  setCurrentTacts,
} from "../../redux/actions";
import {
  selectIsPinNotationClassical,
  selectIsTactingEnabled,
  selectMemoryDisplayType,
  selectIsRasCasEnabled,
} from "../../redux/reducers/visualizationSettings.red";

import BEM from "../../helpers/BEM";
import "./VisualizationSettings.scss";

const b = BEM("VisualizationSettings");

const VisualizationSettings = () => {
  const isTactingEnabled = useSelector(selectIsTactingEnabled);
  const isPinNotationClassical = useSelector(selectIsPinNotationClassical);
  const isRasCasEnabled = useSelector(selectIsRasCasEnabled);
  const memoryDisplayType = useSelector(selectMemoryDisplayType);

  const setIsPinNotationClassicalAct = useAction(setIsPinNotationClassical);
  const setIsTactingEnabledAct = useAction(setIsTactingEnabled);
  const setCurrentTactsAct = useAction(setCurrentTacts);
  const setMemoryDisplayTypeAct = useAction(setMemoryDisplayType);
  const setIsRasCasEnabledAct = useAction(setIsRasCasEnabled);

  useEffect(() => {
    if (!isTactingEnabled) setCurrentTactsAct(0);
  }, [isTactingEnabled, setCurrentTactsAct]);

  const handleDisplayTypeChange = () => {
    const newDisplayType = memoryDisplayType === "matrix" ? "table" : "matrix";
    setMemoryDisplayTypeAct(newDisplayType);
  };

  return (
    <div className={b()}>
      <label className={b("pinNotation")}>
        <input
          className={b("pinNotationInput")}
          type="checkbox"
          checked={isPinNotationClassical}
          onChange={() => setIsPinNotationClassicalAct(!isPinNotationClassical)}
        />
        Classical pin notation
      </label>
      <label className={b("tacting")}>
        <input
          className={b("tactingInput")}
          type="checkbox"
          checked={isTactingEnabled}
          onChange={() => setIsTactingEnabledAct(!isTactingEnabled)}
        />
        Tacting
      </label>
      <label className={b("tacting")}>
        <input
          className={b("tactingInput")}
          type="checkbox"
          checked={memoryDisplayType === "matrix"}
          onChange={handleDisplayTypeChange}
        />
        Matrix view
      </label>
      <label className={b("rasCas")}>
        <input
          className={b("rasCasInput")}
          type="checkbox"
          checked={isRasCasEnabled}
          onChange={() => setIsRasCasEnabledAct(!isRasCasEnabled)}
        />
        RAS / CAS
      </label>
    </div>
  );
};

export default VisualizationSettings;
