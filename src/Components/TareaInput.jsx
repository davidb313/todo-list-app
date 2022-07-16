import React, { useState } from 'react';
import '../styles/tarea-input.css';

const TareaInput = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        onChange={handleChange}
      />
      <button className='tarea-button'>Add Task</button>
    </form>
  );
};

export default TareaInput;
