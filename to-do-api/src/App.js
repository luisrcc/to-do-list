import React, { useState } from 'react';
import TareaForm from './component/TareaForm';
import Tarea from './component/Tarea';
import './App.css';





function App() {
    //crear Usuario
let newUser = async () => {

    const settings = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify([])
}
    const url = 'https://assets.breatheco.de/apis/fake/todos/user/luis'
    const request = await fetch(url, settings)
    const json = await request.json()
    const user = json
    console.log(user, '<- nuevo usuario')
}

let getTarea = async () => {

    const settings = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }

    };
    const request = await fetch( 
        'https://assets.breatheco.de/apis/fake/todos/user/luis',
        settings
    );
    const json = await request.json();
    const data = json.data;
}

let editTarea = async () => {
    const settings = {
        method: 'PUT',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(listaTareas)
}
    const url = 'https://assets.breatheco.de/apis/fake/todos/user/luis'
    const request = await fetch(url, settings)
    const json = await request.json()
    const data = json
    console.log(data)

}

let delTarea = async () => {
    const settings = {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json'
        },
    }
    const request = await fetch( 
        'https://assets.breatheco.de/apis/fake/todos/user/luis',
        settings
    );
    const json = await request.json();
    const data = json.data;
}



    const [listaTareas, setListaTareas] = useState([{"label":"hacer el mercado","done":false}]);

    const nuevaTarea = (tarea) => {
        console.log(tarea, '<-aqui esta la tarea');
        setListaTareas([tarea, ...listaTareas])
        editTarea()
    }

    const borrar = (id) => {
        const listaFiltra = listaTareas.filter((event, index) => index !== id);
        setListaTareas(listaFiltra);

    }

    return (
        <div className="container">
            <h2>To Do List</h2>
             <div className="row justify-content-center">
                <div className="col-8">
                    <ul className="list-group">
                        <TareaForm
                            nuevaTarea={nuevaTarea}
                        />
                        <div className="lista">
                            {
                                listaTareas.map((item, index) =>
                                <Tarea
                                key={index}
                                tarea={item.label}
                                borrar={borrar}
                                id={index}
                                        
                                />

                                )                              
                                
                            }
                            <li className="list-group-item">
                                {listaTareas.length}{listaTareas.length < 9? ' item': ' items'}
                                <i className="far fa-calendar-times"></i>
                            </li>                               

                         </div>
                    </ul>
                </div>
            </div>
        </div>
    
    );

}

export default App;