import React, { useState } from 'react';
import TareaInput from './TareaInput';
import Tarea from './Tarea';
import '../styles/lista-de-tareas.css';

const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {};

  return (
    <>
      <TareaInput />
      <div className='tareas-lista-contenedor'>
        {tareas.map((tarea) => (
          <Tarea texto={tarea.texto} completada={tarea.completada} />
        ))}
      </div>
    </>
  );
};

export default ListaDeTareas;
