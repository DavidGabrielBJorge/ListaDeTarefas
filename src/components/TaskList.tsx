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
        <div key={task.id} className={styles.task}>
          <div className={styles.info}>
            <h4>{task.title}</h4>
            <h4>{task.description}</h4>
            <p>Dificuldade: {task.difficulty}</p>
          </div>

          <div className={styles.actions}>
            <i className='bi bi-pencil'></i>
            <i className='bi bi-trash'></i>

          </div>
        </div>
      ))
    ): (
      <p>Não possui tarefas cadastradas</p>
    )}
    </>
  );
};

export default TaskList;
