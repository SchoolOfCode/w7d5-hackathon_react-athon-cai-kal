import React from "react";
import "../../index.css";
import { useState } from "react";
import Input from "../Input";
import List from "../List";

function App() {
  const [text, setText] = useState("");

  const handleChange = () => {};

  return (
    <div className="App">
      <h1>To Do List</h1>

      <Input />

      <List />
    </div>
  );
}

export default App;
