import React, { useState, ChangeEvent, FormEvent, useEffect} from 'react';
/*
Hooks que serão usados 

useState: manipular o estado
ChangeEvent: alterar alguma coisa quando acontece um evento na tela
FormEvent: submeter o formulário
useEffect
*/
import styles from './TaskForm.module.css';

//Interface das Tasks
import { ITask } from '../interfaces/task';

//Os Props são os objetos que vem do App.tsx
interface Props{
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;//Alterar uma state de uma lista, a ? significa que ela pode ou não ser alterada
}

const  TaskForm = ({btnText, taskList, setTaskList}: Props) => {

  //Declarando variáveis
  const [id, setId]=useState<number>(0)
  const [title, setTitle]=useState<string>("")
  const [description, setDescription]=useState<string>("")
  const [difficulty, setDifficulty]=useState<number>(0)

  //Função para adicionar as tarefas
  const addTaskHandler = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();//Não carregar a tela

    const id = Math.floor(Math.random()*1000)//id será aleatório
    const newTask: ITask = {id, title, description, difficulty}
    
    setTaskList!([...taskList, newTask])//Reunindo todas as tasks em uma lista, incluindo a nova task, como no App possui a ?, para indicar que vai vir uma taskList deve adicionar o !
    
    //Zerar os campos ao adicionar
    setTitle("");
    setDescription("");
    setDifficulty(0);

    console.log(taskList)
  }

  //Função para pegar os valores 
  const handleChanger = (e: ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    if(e.target.name === "title"){
      setTitle(e.target.value)
    }
    if(e.target.name === "description"){
      setDescription(e.target.value)
    }
    else{
      const value = parseInt(e.target.value);
      if (!isNaN(value)) {
        setDifficulty(value);
      }
    }

  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
          <label htmlFor='title'>Título:</label>
          <input type='text' name='title' value={title} placeholder='Título da tarefa' onChange={handleChanger}></input>
        </div>

        <div className={styles.input_container}>
          <label htmlFor='description'>Descrição:</label>
          <input type='text' name='description' value={description} placeholder='Descrição da tarefa' onChange={handleChanger}></input>
        </div>

        <div className={styles.input_container}>
          <label>Dificuldade:</label>
          <input type='number' name='difficulty' value={difficulty} placeholder='Dificuldade da tarefa' onChange={handleChanger} ></input>

        </div>

        <input type='submit' value={btnText}/>
    </form>
  );
};

export default TaskForm;
