import React from "react";
import "../../index.css";
import ListItem from "../List/listitem.js";
import Input from "../Input";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([{ text: "Learn about React" }]); // task = todo

  const addTodo = (text) => {
    const newTodos = [...task, { text }];
    setTask(newTodos);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Input addTodo={addTodo} />
      {task.map((list, index) => (
        <ListItem key={index} index={index} list={list} />
      ))}
    </div>
  );
}

export default App;
