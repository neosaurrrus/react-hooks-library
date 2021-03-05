import React from "react";
import { useInc } from "../hooks";

export default function Inc() {
  const [volume, { dec, inc, reset}] = useInc({
      maxValue: 5,
      minValue: 0,
      initial: 3
  });
  return (
    <div>
      <h1>Volume</h1>
      <button onClick={dec}>-</button>
      {volume}
      <button onClick={inc}>+</button>
      <button onClick={reset}>Reset Volume</button>
    </div>
  );
}
