import React from "react";

const Button = (send) => {
  return (
    <button className="addbtn" onClick={send.onClick}>
      Add to list
    </button>
  );
};

export default Button;
