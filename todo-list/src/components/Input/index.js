import React from "react";
import Button from "./button";

function Input(props) {
  return (
    <form>
      <input className="todoinput" type="text"></input>
      <Button />
    </form>
  );
}

export default Input;
