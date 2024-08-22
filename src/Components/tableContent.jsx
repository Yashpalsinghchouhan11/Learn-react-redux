import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveTask, CompletedTask, UpdateTask, UpdateDate } from "../features/taskSlice";

export default function TableContent() {
  const taskList = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editTask, setEditTask] = useState({});
  const [editDate, setEditDate] = useState({})
  const editInputRefs = useRef({});
  const editDateInputRefs = useRef({});

  const handleChecked = (e) => {
    let id = e.target.value;
    dispatch(CompletedTask(id));
  };

  const handleRemove = (e) => {
    let id = e.target.value;
    dispatch(RemoveTask(id));
  };

  const handleEdit = (e, id) => {
    // setEditTask({ ...editTask, [id]: e.target.value });
    setEditTask({...editTask, [id]:e.target.value})
  };
  const handleDateEdit = (e, id) => {
    // setEditTask({ ...editTask, [id]: e.target.value });
    setEditDate({...editDate, [id]:e.target.value})
  };

  const handleEditClicked = (id) =>{
    const inputRef = editInputRefs.current[id]
    if (inputRef){
      inputRef.focus();
    }
  }

  const handleSaveClicked = (id) => {
    if (editTask[id] !== undefined) {
      dispatch(UpdateTask({ id, task: editTask[id] }));
      setEditTask((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    }
  };
  const handleDateEditClicked = (id) =>{
    const inputRef = editDateInputRefs.current[id]
    if (inputRef){
      inputRef.focus();
    }
  }

  const handleDateSaveClicked = (id) => {
    if (editDate[id] !== undefined) {
      dispatch(UpdateDate({ id, date: editDate[id] }));
      setEditTask((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    }
  };

  // const handleSaveEdit = (id) => {
  //     setEdit(false)
    
  // };

  return (
    <>
      <div className="w-full flex items-center justify-center mt-8">
        <table className="border-2 border-zinc-500">
          <thead>
            <tr className="border-2 border-zinc-500">
              <th className="border-2 border-zinc-500 text-slate-50 p-2">ID</th>
              <th className="border-2 border-zinc-500 text-slate-50 p-2">Task</th>
              <th className="border-2 border-zinc-500 text-slate-50 p-2">Date</th>
              <th className="border-2 border-zinc-500 text-slate-50 p-2">Actions</th>
              <th className="border-2 border-zinc-500 text-slate-50 p-2">Completed</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((task) => (
              <tr key={task.ID} className="border-2 border-zinc-500">
                <td className="text-slate-50 border-2 border-zinc-500 p-2">{task.ID}</td>
                <td className="border-2 border-zinc-500 p-2">
                  <input
                    type="text"
                    value={editTask[task.ID] !== undefined ? editTask[task.ID] : task.Task}
                    className="p-2 mr-2 text-slate-50 bg-zinc-800 rounded-lg leading-8 border-zinc-500 border-2 outline-zinc-800 placeholder-slate-50"
                    onChange={(e) => handleEdit(e, task.ID)}
                    // onKeyPress={(e) => handleKeyPress(e, task.ID)}
                    ref={(el) => (editInputRefs.current[task.ID] = el)}
                  />
                  <button
                      className="text-slate-50 border-zinc-500 border-2 p-2 mx-2 bg-zinc-800 rounded-lg hover:bg-zinc-700"
                      onClick={() => handleEditClicked(task.ID)}
                    >
                      Edit
                    </button>
                  <button
                      className="text-slate-50 border-zinc-500 border-2 p-2 mx-2 bg-zinc-800 rounded-lg hover:bg-zinc-700"
                      onClick={() => handleSaveClicked(task.ID)}
                    >
                      Save
                    </button>
                </td>
                <td className="border-2 border-zinc-500 p-2"><input
                    type="date"
                    value={editDate[task.ID] !== undefined ? editDate[task.ID] : task.Date}
                    className="p-2 mr-2 text-slate-50 bg-zinc-800 rounded-lg leading-8 border-zinc-500 border-2 outline-zinc-800 placeholder-slate-50"
                    onChange={(e) => handleDateEdit(e, task.ID)}
                    // onKeyPress={(e) => handleKeyPress(e, task.ID)}
                    ref={(el) => (editDateInputRefs.current[task.ID] = el)}
                  />
                <button
                      className="text-slate-50 border-zinc-500 border-2 p-2 mx-2 bg-zinc-800 rounded-lg hover:bg-zinc-700"
                      onClick={() => handleDateEditClicked(task.ID)}
                    >
                      Edit
                    </button>
                  <button
                      className="text-slate-50 border-zinc-500 border-2 p-2 mx-2 bg-zinc-800 rounded-lg hover:bg-zinc-700"
                      onClick={() => handleDateSaveClicked(task.ID)}
                    >
                      Save
                    </button>
                </td>
                <td className="border-2 border-zinc-500 p-2">
                  <button
                    className="text-slate-50 border-zinc-500 border-2 p-2 mx-2 bg-zinc-800 rounded-lg hover:bg-zinc-700"
                    value={task.ID}
                    onClick={handleRemove}
                  >
                    Delete
                  </button>
                </td>
                <td className="border-2 border-zinc-500 p-2 ">
                  <input
                    type="checkbox"
                    onChange={handleChecked}
                    className="text-slate-50 p-2 size-4 bg-zinc-800 rounded-lg"
                    value={task.ID}
                    checked={task.Completed}
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
