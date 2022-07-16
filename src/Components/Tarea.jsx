import React from 'react';
import '../styles/tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {
  return (
    <div
      className={
        //clase condicional para completar la tarea
        completada ? 'tarea-contenedor completada' : 'tarea-contenedor'
      }
    >
      <div className='tarea-texto' onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}
      >
        <AiOutlineCloseCircle className='borrar-tarea-icono' />
      </div>
    </div>
  );
};

export default Tarea;
