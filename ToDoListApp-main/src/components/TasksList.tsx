import React from 'react';
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";


interface Task {
    id: string;
    task: string;
  }

interface TaskType {
    updateHandler: (e:any) => void; 
    deleteHandler: (e:any) => void; 
    tasks: Task[];
}

function TasksList({tasks, updateHandler, deleteHandler}: TaskType) {
  return (
    <ul className="listBox">
        {tasks.map((t: any) => {
          return (
            <li key={t.id}>
              <span className="single-text">{t.task}</span>
              <button className="funbtn" onClick={() => updateHandler(t.id)}><FaEdit /></button>
              <button className="funbtn" onClick={() => deleteHandler(t.id)}><FaTrash /></button>
            </li>
          );
        })}
      </ul>
  )
}

export default TasksList
