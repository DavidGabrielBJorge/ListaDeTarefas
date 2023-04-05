import React, {useState} from 'react';
//componentes
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

//CSS App
import styles from './App.module.css';

//Interface das Tasks
import { ITask } from './interfaces/task';


function App() {

   //Declarando uma lista de tarefas com base na interface Task
   const [taskList, setTaskList] = useState<ITask[]>([]);

   //Função para deletar a tarefa
   const deleteTask = (id: number) => {
      setTaskList(
         taskList.filter(task =>{
            return task.id !== id
         }))
   }
 return (
 <div>
   <Modal children={<TaskForm btnText='Editar tarefa' taskList={taskList}/>}></Modal>

    <Header></Header>
    <main className={styles.main}>
      <div>
         <h2>O que você vai fazer ?</h2>
         <TaskForm btnText="Criar tarefa" taskList={taskList} setTaskList={setTaskList}></TaskForm>
      </div>

      <div>
         <h2>As tarefas</h2>
         <TaskList taskList={taskList} handleDelete={deleteTask}></TaskList>
      </div>

    </main>
    <Footer></Footer>


 </div>
 )
}

export default App;
