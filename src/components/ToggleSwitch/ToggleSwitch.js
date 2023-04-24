import "./ToggleSwitch.css";
import { useContext, useState, useEffect } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  const [fahrenheight, setFahrenheight] = useState(" ");

  const [celsius, setCelsius] = useState(" ");

  useEffect(() => {
    if (currentTemperatureUnit === "F") {
      setFahrenheight("white");
    } else {
      setFahrenheight("rbga(126, 126, 126, 1");
    }
  }, [currentTemperatureUnit]);

  useEffect(() => {
    if (currentTemperatureUnit === "C") {
      setCelsius("white");
    } else {
      setCelsius("rbga(126, 126, 126, 1)");
    }
  }, [currentTemperatureUnit]);

  return (
    <>
      <input
        className="toggle-switch__checkbox"
        id={"toggle-switch-new"}
        type="checkbox"
        value={currentTemperatureUnit}
        onChange={handleToggleSwitchChange}
      />
      <label className="toggle-switch__label" htmlFor={"toggle-switch-new"}>
        <span className={"toggle-switch__button"} />
        <p
          className="toggle-switch__element toggle-switch__element_f"
          style={{ color: fahrenheight }}
        >
          F
        </p>
        <p
          className="toggle-switch__element toggle-switch__element_c"
          style={{ color: celsius }}
        >
          C
        </p>
      </label>
    </>
  );
}

export default ToggleSwitch;
