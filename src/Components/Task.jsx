import React, { useContext } from "react";
import { useState, useCallback } from "react";
import TableContent from "./tableContent.jsx";
import { useSelector, useDispatch } from "react-redux";
import { AddTask } from "../features/taskSlice.js";
import TaskContext from "./context/useContext.js";

export default function Task() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  // const { taskList, setTaskList } = useContext(TaskContext);
  // const taskList = useSelector((state)=> state.tasks)
  const dispatch = useDispatch();

  const handleOnTask = (e) => {
    let task = e.target.value;
    setTask(task);
  };

  const handleDate = (e) => {
    let date = e.target.value;
    setDate(date);
  };

  const addTask = () => {
    if (task.trim() == "") {
      setMessage("Please Enter Task!");
      return;
    }
    const generateUniqueID = () => {
      return Math.random().toString(36).substring(2, 9);
    };

    const taskObj = {
      ID: generateUniqueID(),
      Task: task,
      Date: date,
      Completed: false,
    };
    dispatch(AddTask(taskObj));
    setTask("");
    setDate("");
  };

  return (
    <>
      {/* <div className="w-full flex flex-col items-center justify-center"> */}
      <div className="w-full mt-16 flex items-center justify-center ">
        <input
          type="text"
          value={task}
          className=" px-4 py-2 text-slate-50 bg-zinc-800 rounded-lg leading-8 border-zinc-500 border-2 outline-zinc-800 placeholder-slate-50"
          placeholder="Write Task..."
          onChange={handleOnTask}
        />
        <input
          type="date"
          value={date}
          className="p-2 w-8 ml-1 bg-zinc-500"
          onChange={handleDate}
        />
        <button
          className="text-slate-50 border-zinc-500 border-2 p-2 mx-4 bg-zinc-800 rounded-lg leading-8 hover:bg-zinc-700"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      {message ? (
        <span className="text-red-500 flex items-center justify-center">
          {message}
        </span>
      ) : (
        <br />
      )}
      <TableContent />
      {/* </div> */}
    </>
  );
}
