import { useState } from "react";
import "./App.css";
import Task from "./Components/Task.jsx";
import UseTaskContext from "./Components/context/TaskContext.jsx";

function App() {
  return (
    <UseTaskContext>
      <Task />
    </UseTaskContext>
  );
}

export default App;
