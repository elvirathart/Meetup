import React, { useState } from "react";
import { Button } from "../Button/Button";

export const ClickCounter: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  const handleReset = () => {
    setClickCount(0);
  };

  return (
    <div className="click-counter-container">
      <Button label={`Click Me (${clickCount})`} onClick={handleClick} />
      <Button label="Reset" onClick={handleReset} />
    </div>
  );
};
