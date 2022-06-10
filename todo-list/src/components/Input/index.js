import React from "react";
import Button from "./button";

function Input({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todoinput"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button />
    </form>
  );
}

export default Input;
