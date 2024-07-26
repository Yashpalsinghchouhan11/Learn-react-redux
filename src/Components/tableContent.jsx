import React, { useContext } from "react";
import { useState } from "react";
import Task from "./Task";
import TaskContext from "./context/useContext";
import { useDispatch, useSelector } from "react-redux";
import { RemoveTask, CompletedTask } from "../features/taskSlice";

export default function TableContent() {

    const taskList = useSelector((state)=> state.tasks)
    const dispatch = useDispatch();
    // const {taskList, setTaskList,} = useContext(TaskContext)
    
    // console.log(taskList)
    const handleChecked = (e) =>{
        let id = e.target.value;
        dispatch(CompletedTask(id))
      }

    const handleRemove = (e) =>{
        let id = e.target.value;
        dispatch(RemoveTask(id))
    }

  return (
    <>
      <div className="w-full flex items-center justify-center  mt-8">
        <table className=" border-2 border-black">
          <thead>
            <tr className="border-2 border-black ">
              <th className="border-2 border-black p-2">ID</th>
              <th className="border-2 border-black p-2">Task</th>
              <th className="border-2 border-black p-2">Date</th>
              <th className="border-2 border-black p-2">Actions</th>
              <th className="border-2 border-black p-2">Completed</th>
            </tr>
          </thead>
          <tbody>
              {taskList.map((Task, index) => (
            <tr className="border-2 border-black" >
                <td className="border-2 border-black p-2" >
                  {Task.ID}
                </td>
                <td className="border-2 border-black p-2" >
                  {Task.Task}
                </td>
                <td className="border-2 border-black p-2" >
                  {Task.Date}
                </td>
              <td className="border-2 border-black p-2">
                <button  className="text-black p-2 bg-blue-500 rounded-lg leading-8 outline-gray-50" value={Task.ID} onClick={handleRemove}>
                  Delete
                </button>
              </td>
              <td className="border-2 border-black p-2" >
                <input
                  type="checkbox"
                  onChange={handleChecked}
                  className="text-black p-2 size-4 bg-blue-500 rounded-lg leading-8 outline-gray-50"
                  value={Task.ID}
                  checked={Task.Completed}
                />
              </td>
            </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
