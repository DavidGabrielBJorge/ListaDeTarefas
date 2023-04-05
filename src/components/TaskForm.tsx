import React, { useState, ChangeEvent, FormEvent, useEffect} from 'react';
/*
Hooks que serão usados 

useState: manipular o estado
ChangeEvent: alterar alguma coisa quando acontece um evento na tela
FormEvent: submeter o formulário
useEffect: faz uma ação uma única vez, como no react fica constantemente "observando" as ações para editar um componente apenas uma vex precisa usar esse Hook
*/
import styles from './TaskForm.module.css';

//Interface das Tasks
import { ITask } from '../interfaces/task';

//Os Props são os objetos que vem do App.tsx
interface Props{
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;//Alterar uma state de uma lista, a ? significa que ela pode ou não ser alterada
  task?: ITask | null;//Pode ou não receber um id de uma tarefa e pode receber null
  handleUpdate?(id: number, title: string, description: string, difficulty: number): void;//método opcional, por isso tem ?
}

const  TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}: Props) => {

  //Declarando variáveis
  const [id, setId]=useState<number>(0);
  const [title, setTitle]=useState<string>("");
  const [description, setDescription]=useState<string>("");
  const [difficulty, setDifficulty]=useState<number>(0);

  //Função para mostrar os dados da tarefa que deve ser editada
  useEffect(()=>{
    //Preenche os dados da tarefa com os dados alterados
    if(task){
      setId(task.id);
      setTitle(task.title);
      setDescription(task.description);
      setDifficulty(task.difficulty);
    }
  }, [task])

  //Função para adicionar as tarefas
  const addTaskHandler = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();//Não carregar a tela

    //Caso for atualizar
    if(handleUpdate){
      handleUpdate(id, title, description, difficulty)//Envia os dados para o handleUpdate no App
    }else{//Caso for criar

      const id = Math.floor(Math.random()*1000)//id será aleatório
      const newTask: ITask = {id, title, description, difficulty}
      
      setTaskList!([...taskList, newTask])//Reunindo todas as tasks em uma lista, incluindo a nova task, como no App possui a ?, para indicar que vai vir uma taskList deve adicionar o !
      
      //Zerar os campos ao adicionar
      setTitle("");
      setDescription("");
      setDifficulty(0);
  }

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
