import React from 'react';

const Tarea = (props) => {

    const borrarTarea = () => {
        props.borrar(props.id);

    }

    return(

            <li className="list-group-item"> 
                <span onClick={borrarTarea}>{props.tarea}</span>
            </li>
    );   

    

}
export default Tarea;