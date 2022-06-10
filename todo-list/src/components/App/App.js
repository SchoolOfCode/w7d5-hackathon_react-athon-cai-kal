import React from "react";
import "../../index.css";
import ListItem from "../List/listitem.js";
import Input from "../Input";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([{ text: "This is the first task" }]); // task = todo

  const addTodo = (text) => {
    const newTodos = [...task, { text }];
    setTask(newTodos);
  };

  const removeToDo = (index) => {
    const newTodos = [...task];
    newTodos.splice(index, 1);
    setTask(newTodos);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Input addTodo={addTodo} />
      {task.map((list, index) => (
        <ListItem
          key={index}
          index={index}
          list={list}
          removeToDo={removeToDo}
        />
      ))}
    </div>
  );
}

export default App;
