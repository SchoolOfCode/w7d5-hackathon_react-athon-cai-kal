import React from "react";

function Input(props) {
  return (
    <form>
      <input className="todoinput" type="text">
        {props.value}
      </input>
    </form>
  );
}

export default Input;
