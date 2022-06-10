import React from "react";
const DeleteBtn = ({ removeToDo, index }) => {
  return <button onClick={() => removeToDo(index)}>x</button>;
};

export default DeleteBtn;
