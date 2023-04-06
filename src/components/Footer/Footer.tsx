import * as React from 'react';
import styles from "./Footer.module.css"

const  Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.repositorio}>
        <h2>Confira o repositório do projeto</h2>
        
        <a className={styles.link} href="https://github.com/DavidGabrielBJorge/ListaDeTarefas">Clique aqui</a>
      
        <p className={styles.creditos}>David  © 2023 Copyright</p>

      </div>
       

    </footer>
  );
};

export default Footer;
