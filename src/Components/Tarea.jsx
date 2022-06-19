import React from 'react';
import '../styles/tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Tarea = ({ texto, done }) => {
  return (
    <div className={done ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className='tarea-texto'>{texto}</div>
      <div className='tarea-contenedor-iconos'>
        <AiOutlineCloseCircle className='borrar-tarea-icono' />
      </div>
    </div>
  );
};

export default Tarea;
