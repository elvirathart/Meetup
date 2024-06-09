import React, { useState } from "react";

export const EvolutionButton: React.FC<{ stateIndex?: number }> = ({
  stateIndex = 0,
}) => {
  const [internalStateIndex, setInternalStateIndex] = useState(stateIndex);
  const states = ["Pichu", "Pikachu", "Raichu"];

  const handleClick = () => {
    setInternalStateIndex((prevIndex) => (prevIndex + 1) % states.length);
  };

  const getColor = () => {
    switch (states[internalStateIndex]) {
      case "Pichu":
        return "yellow";
      case "Pikachu":
        return "orange";
      case "Raichu":
        return "red";
      default:
        return "white";
    }
  };

  return (
    <button
      onClick={handleClick}
      className={"evolution-button"}
      style={{ backgroundColor: getColor() }}
    >
      The Pokemon Evolution Button - Click me! <br />{" "}
      {states[internalStateIndex]}
    </button>
  );
};
