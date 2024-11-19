import React, { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import TasksList from "./components/TasksList";



interface Task {
  id: string;
  task: string;
}

function App() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editId, setEditId] = useState<string>("");

  function changeHandler(e: any) {
    setTask(e.target.value);
  }

  function submitHandler(e: any) {
    e.preventDefault();

    if (editId) {
      const editTask: any = tasks.find((i) => i.id === editId);
      const updateTasks = tasks.map((t) => {
        return t.id === editTask.id
          ? (t = { id: t.id, task })
          : { id: t.id, task: t.task };
      });
      setTasks(updateTasks);
      setEditId("");
      setTask("");
      return;
    }

    if (task.trim() !== "") {
      setTasks([...tasks, { id: `${task} - ${Date.now()}`, task }]); // Add the new task to the existing tasks list.
      setTask("");
    }
  }

  function deleteListHandler(id: string) {
    const deleteTasks: Task[] = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(deleteTasks);
  }

  function updateListHandler(id: string) {
    const editsTask: any = tasks.find((i) => i.id === id);
    console.log(editsTask);
    setTask(editsTask.task);
    setEditId(id);
  }
  return (
    <div className="container">
      <h1>To Do List</h1>
      <ToDoForm
        submitHandler={submitHandler}
        task={task}
        changeHandler={changeHandler}
        editId={editId}
      />
      <TasksList tasks={tasks} updateHandler={updateListHandler} deleteHandler={deleteListHandler} />
      <footer className="footer">
        Total Number of List : {tasks.length}
      </footer>
    </div>
  );
}

export default App;
