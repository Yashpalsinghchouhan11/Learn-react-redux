import TaskContext from "./useContext";
import { useState } from "react";
export default function UseTaskContext({ children }) {
  const [taskList, setTaskList] = useState([]);
  return <TaskContext.Provider value={{taskList, setTaskList}}>{children}</TaskContext.Provider>;
}
