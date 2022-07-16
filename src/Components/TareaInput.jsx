import React from 'react';
import '../styles/tarea-input.css';

const TareaInput = ({ texto }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const manejarEnvio = {
      id: Math.random(),
      texto: { texto },
    };
  };

  return (
    <form className='tarea-formulario'>
      <input
        className='tarea-input'
        type='text'
        placeholder='Type a task'
        name='texto'
      />
      <button className='tarea-button' onClick={handleSubmit}>
        Add Task
      </button>
    </form>
  );
};

export default TareaInput;
