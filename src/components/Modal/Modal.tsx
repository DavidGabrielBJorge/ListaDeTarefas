import React, { Children } from "react";

import styles from "./Modal.module.css"

interface Props{
    children: React.ReactNode //Campos do formulário
}

const Modal = ({children}: Props) =>{
    
    const closeModal =(e: React.MouseEvent):void =>{//Clique em um componente de React
        const modal = document.querySelector("#modal")
        modal!.classList.add("hide")//adiciona a classe hide para esconder o Modal, essa classe foi criada no index.css
        //A ? indica que pode ou não acontecer enquanto o ! indica que é certeza
    }
    
    return(
        <div id="modal" className="hide">
            <div className={styles.fade} onClick={closeModal}></div>
            <div className={styles.modal}>
                <h2>Tarefa</h2>
                {children}
            </div>
        </div>
    )
}

export default Modal;