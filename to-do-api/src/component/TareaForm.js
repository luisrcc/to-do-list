import React, { useState } from "react";


const TareaForm = (props) => {
    const [inputText, setInputText] = useState({});
    

    const formulario = (event) => {
        setInputText({
            label: event.target.value, done: false
        });

    }
    const submit = (event) => {
              
            props.nuevaTarea(inputText);
            setInputText({label:""});                 
    }

    return (

        <div >
            <span>{JSON.stringify(inputText)}</span>
            <form className="form" onSubmit={(event)=>{ event.preventDefault(); 
                submit(event)}}>
                <input className="input-group" placeholder="What needs to be done?" value={inputText.label} onChange={(event)=>formulario(event)} />

            </form>

        </div>

    )

}

export default TareaForm;
