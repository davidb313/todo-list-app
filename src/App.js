import './App.css';
import Tarea from './Components/Tarea';
import { useState } from 'react';

function App() {
  const [texto, setTexto] = useState('');
  const [done, setDone] = useState(false);

  return (
    <div className='app-main-container'>
      <h1>Free React Todo-List</h1>
      <div className='todo-list-container'>
        <h2>Mis tareas</h2>
        <Tarea texto={texto} done={done} />
      </div>
    </div>
  );
}

export default App;
