import React, {useState} from 'react';
//componentes
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import Modal from './components/Modal/Modal';

//CSS App
import styles from './App.module.css';

//Interface das Tasks
import { ITask } from './interfaces/task';


function App() {

   //Declarando uma lista de tarefas com base na interface Task
   const [taskList, setTaskList] = useState<ITask[]>([]);

   const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)
   //Variável para pegar o Id da tarefa que deseja atualizar, começando com null

   //Função para deletar a tarefa
   const deleteTask = (id: number) => {
      setTaskList(
         taskList.filter(task =>{
            return task.id !== id
         }))
   };

   //Função para editar e aparecer os campos
   const editHideShowModal =(display: boolean) =>{
      const modal =document.querySelector('#modal')

      if(display){
         modal!.classList.remove('hide')//remove o hide mostrando os campos para editar
      }else{
         modal!.classList.add('hide')//esconde os campos
      }

   };

   //Função para mostrar o pop-up e aparecer os dados da tarefa
   const editTask =(task:ITask):void =>{//Está enviando o Id da tarefa que tem que ser editada
      editHideShowModal(true);
      setTaskToUpdate(task);
   }

   //Função para atualizar os dados
   const updateTask =(id: number, title: string, description: string, difficulty: number) =>{
      const updatedTask: ITask ={id, title, description, difficulty}

      const updatedItems = taskList.map((task)=>{
         //verifica cada tarefa

         return task.id === updatedTask.id ? updatedTask: task
         //Confere se o id da task é igual o da updated task, se for igual vai alterar os dados, se não permanece o mesmo
      })

      setTaskList(updatedItems)
      //Envia os dados da tarefa, ela sendo atualizada ou não

      editHideShowModal(false)

   }

 return (
 <div>
   <Modal children={<TaskForm btnText='Editar tarefa' taskList={taskList} task={taskToUpdate}  handleUpdate={updateTask}/>}></Modal>

    <Header></Header>
    <main className={styles.main}>
      <div>
         <h2>O que você vai fazer ?</h2>
         <TaskForm btnText="Criar tarefa" taskList={taskList}  setTaskList={setTaskList} ></TaskForm>
      </div>

      <div>
         <h2>As tarefas</h2>
         <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}></TaskList>
      </div>

    </main>
    <Footer></Footer>


 </div>
 )
}

export default App;
