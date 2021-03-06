export const SET_PINS_WIDTH = "SET_PINS_WIDTH";
export const SET_PINS = "SET_PINS";

export const SET_CLOCK_PIN = "SET_CLOCK_PIN";

// These actions are use for RAS / CAS mode,
// when row and column address are set separately
export const SET_ADDRESS_ROW = "SET_ADDRESS_ROW";
export const SET_ADDRESS_COLUMN = "SET_ADDRESS_COLUMN";

export const SET_MEMORY = "SET_MEMORY";
export const SET_TACTS = "SET_TACTS";
export const SET_CURRENT_TACTS = "SET_CURRENT_TACTS";

export const TOGGLE_RAS_CAS = "TOGGLE_RAS_CAS";

export const WRITE_DATUM_IN_MEMORY = "WRITE_DATUM_IN_MEMORY";
export const READ_DATUM_FROM_MEMORY = "READ_DATUM_FROM_MEMORY";

export const SET_IS_PIN_NOTATION_CLASSICAL = "SET_IS_PIN_NOTATION_CLASSICAL";
export const SET_IS_TACTING_ENABLED = "SET_IS_TACTING_ENABLED";
export const SET_IS_RAS_CAS_ENABLED = "SET_IS_RAS_CAS_ENABLED";
export const SET_MEMORY_DISPLAY_TYPE = "SET_MEMORY_DISPLAY_TYPE";

export const SET_SELECTED_ROW_IN_MEMORY = "SET_SELECTED_ROW_IN_MEMORY";
export const SET_SELECTED_COL_IN_MEMORY = "SET_SELECTED_COL_IN_MEMORY";
export const SET_SELECTED_ADDRESS_IN_MEMORY = "SET_SELECTED_ADDRESS_IN_MEMORY";

export const setPins = (type, value) => ({ type: SET_PINS, payload: { type, value } });

export const setClockPin = (value) => ({ type: SET_CLOCK_PIN, payload: value });

export const setRas = (value) => ({ type: SET_ADDRESS_ROW, payload: value });
export const setCas = (value) => ({ type: SET_ADDRESS_COLUMN, payload: value });

export const setAddressRowInMemory = (value) => ({ type: SET_SELECTED_ROW_IN_MEMORY, payload: value });
export const setAddressColumnInMemory = (value) => ({ type: SET_SELECTED_COL_IN_MEMORY, payload: value });
export const setSelectedAddressInMemory = (value) => ({ type: SET_SELECTED_ADDRESS_IN_MEMORY, payload: value });

export const setPinsTypeWidth = (type, width) => ({ type: SET_PINS_WIDTH, payload: { type, width } });

export const setIsPinNotationClassical = (isClassical) => ({
  type: SET_IS_PIN_NOTATION_CLASSICAL,
  payload: { isClassical },
});

export const setMemoryDisplayType = (displayType) => ({
  type: SET_MEMORY_DISPLAY_TYPE,
  payload: { displayType },
});

export const setIsTactingEnabled = (isEnabled) => ({
  type: SET_IS_TACTING_ENABLED,
  payload: { isEnabled },
});

export const setIsRasCasEnabled = (isEnabled) => ({
  type: SET_IS_RAS_CAS_ENABLED,
  payload: { isEnabled },
});

export const setDatumInMemory = (datum, address) => ({
  type: WRITE_DATUM_IN_MEMORY,
  payload: {
    datum,
    address,
  },
});

export const setMemory = (data) => {
  return {
    type: SET_MEMORY,
    payload: {
      data,
    },
  };
};

export const setTacts = (numberOfTacts) => ({ type: SET_TACTS, payload: numberOfTacts });
export const setCurrentTacts = (numberOfTacts) => ({ type: SET_CURRENT_TACTS, payload: numberOfTacts });

export const toggleRasCas = () => ({ type: TOGGLE_RAS_CAS });
