import React from "react";
import "../../index.css";
import List from "../List";
import Input from "../Input";
import { useState } from "react";
import Button from "../Input/button.js";

function App() {
  const [task, setTask] = useState("");

  const submitTask = (e) => {
    const submit = e.target.value;
    setTask(submit);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Input value={task} />
      <Button onClick={submitTask} />
      <List />
    </div>
  );
}

export default App;
