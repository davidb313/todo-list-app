import React, { useState } from "react";
import "../styles/tarea-input.css";

const TareaInput = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");

    const tareaNueva = {
      id: Math.random(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
  };

  return (
    <form className='tarea-formulario' onSubmit={handleSubmit}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Type a task'
        name='texto'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type='button' className='tarea-button' onClick={handleSubmit}>
        Add Task
      </button>
    </form>
  );
};

export default TareaInput;
