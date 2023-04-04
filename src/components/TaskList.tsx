import * as React from 'react';
import { ITask } from '../interfaces/task';

import styles from "./TaskList.module.css";

interface Props{
  taskList : ITask[]
}

const  TaskList = ({taskList}: Props) => {
  return (
    <>
    {taskList.length > 0 ?(
      taskList.map((task)=>(
        <div key={task.id}>
          <p>{task.title}</p>
        </div>
      ))
    ): (
      <p>Não possui tarefas cadastradas</p>
    )}
    </>
  );
};

export default TaskList;
