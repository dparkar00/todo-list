import React, { useState } from "react";
import TodoItem from "./todoItem";

export const List = (props) => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      const newTask = { id: Date.now(), text: input };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setInput(""); // Clear input after adding task
    }
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type task here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <TodoItem item={task} onDelete={() => deleteTask(task.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
