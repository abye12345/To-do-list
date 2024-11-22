import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [isTaskFormVisible, setIsTaskFormVisible] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskSummary, setTaskSummary] = useState("");
  const [tasks, setTasks] = useState([]);
  const toggleTaskForm = () => {
    setIsTaskFormVisible((prev) => !prev);
  };

  const createTask = () => {
    if (taskTitle.trim() && taskSummary.trim()) {
      setTasks([...tasks, { title: taskTitle, summary: taskSummary }]);
      setTaskTitle("");
      setTaskSummary("");
      toggleTaskForm();
    }
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="flex justify-center items-center mt-8">
        <div>
          <h1 className="font-bold text-2xl mb-3 text-center">My Tasks</h1>

          <button
            onClick={toggleTaskForm}
            className="text-xl bg-green-500 rounded-xl w-[300px]"
          >
            New Task
          </button>
        </div>
      </div>
      {isTaskFormVisible && (
        <div className="bg-white shadow-2xl max-w-xl space-y-8 m-auto px-12 pb-12 mt-6 transition-0.5s ease">
          <h1 className="text-[15px]">New Task</h1>
          <div>
            <label className="text-[15px]">
              Title<span className="text-red-600 font-bold">*</span>
            </label>
            <input
              onChange={(e) => setTaskTitle(e.target.value)}
              value={taskTitle}
              type="text"
              className="w-full border-2 border-sky-400 rounded-xl p-2"
              required
            />
          </div>
          <div>
            <label className="text-[15px]">Summary</label>
            <input
              type="text"
              onChange={(e) => setTaskSummary(e.target.value)}
              value={taskSummary}
              className="w-full border-2 border-sky-400 rounded-xl p-2"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={toggleTaskForm}
              className="text-[15px] font-bold text-sky-400"
            >
              Cancel
            </button>
            <button
              onClick={createTask}
              className="p-2 text-[15px] float-right text-white bg-sky-800 w-[120px] rounded-full"
            >
              Create Task
            </button>
          </div>
        </div>
      )}
      <div className="mt-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="border-2 border-sky-400 mx-auto p-2 w-1/2 rounded-xl mb-2 flex justify-between items-center"
          >
            <div>
              <h2 className="font-bold">{task.title}</h2>
              <p>{task.summary}</p>
            </div>
            <div className="float-right text-red-600 ">
              <button onClick={() => deleteTask(index)}>
                <FontAwesomeIcon icon={faTrash} className="size-6" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
