import * as React from 'react';
import { ITask } from '../../interfaces/task';

import styles from "./TaskList.module.css";

interface Props{
  taskList : ITask[];//Id da tarefa
  handleDelete(id: number): void;
  handleEdit(task: ITask):void;
}

const  TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
  return (
    <>
    {taskList.length > 0 ?(
      taskList.map((task)=>(
        <div key={task.id} className={styles.task}>
          <div className={styles.info}>
            <h4>{task.title}</h4>
            <h3>{task.description}</h3>
            <p>Dificuldade: {task.difficulty}</p>
          </div>

          <div className={styles.actions}>
            <i className='bi bi-pencil'  onClick={()=>{handleEdit(task)}}></i> {/*Vai enviar para editar o id da tarefa*/}
            <i className='bi bi-trash' onClick={()=>{handleDelete(task.id)}}></i>

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
