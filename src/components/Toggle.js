import React, { useState } from "react";

export default function Toggle() {
  const [isToggled, setToggle] = useState(false);
  return (
    <div>
      <button onClick={() => setToggle((prevState) => !prevState)}>
        Toggle
      </button>
      {isToggled && <p>To be toggled</p>}
    </div>
  );
}
