import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ScriptInput } from "./ScriptInput";

export const ScriptAnalyzer = () => {
  const [inputValue, setInputValue] = useState("select * from orchard");

  const handleNewInput = (input) => {
    setInputValue(input);
  };

  return (
    <ScriptInput
      scriptValue={inputValue}
      handleNewInput={handleNewInput}
    ></ScriptInput>
  );
};
