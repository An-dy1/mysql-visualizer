import React, { setState, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

export const ScriptInput = (props) => {
  const handleInputChange = ({ target }) => {
    const newInput = target.value;
    props.handleNewInput(newInput);
  };

  return (
    <div className="App">
      <h2>This is my Script Input component</h2>

      <div class="form-group row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <form>
            <input
              onChange={handleInputChange}
              class="form-control input-lg"
              type="text"
              placeholder={props.scriptValue}
            ></input>
          </form>
        </div>
        <div class="col-sm-4"></div>
      </div>
    </div>
  );
};
