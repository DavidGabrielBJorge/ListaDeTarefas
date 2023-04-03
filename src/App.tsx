import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './App.module.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


function App() {
 return (
 <div>

    <Header></Header>
    <main className={styles.main}>
      <div>
         <h2>O que você vai fazer ?</h2>
         <TaskForm btnText="Criar tarefa"></TaskForm>
      </div>

      <div>
         <h2>As tarefas</h2>
         <TaskList></TaskList>
      </div>

    </main>
    <Footer></Footer>


 </div>
 )
}

export default App;
