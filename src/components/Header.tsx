import * as React from 'react';
import styles from "./Header.module.css";
/*
Para fazer com que crie uma estilização em modulos deve criar 
um arquivo na raiz chamado Global.d.ts

Obs: estilização em modulos é muito usado em TS
*/
const  Header = () => {
  return (
    <header className={styles.header}>
        <h1>Lista de Tarefas</h1>
    </header>
  );
};

export default Header;
