import React, { useState } from "react";
import Example from "./Example";
function Example2() {
  const ChildComp = ({ props }) => (
    <button onClick={() => props("test string")}>Click Here</button>
  );
}
export default Example2;
