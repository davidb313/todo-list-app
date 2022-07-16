import './styles/App.css';
import ListaDeTareas from './Components/ListaDeTareas';
import image from './assets/images/image.png';

function App() {
  return (
    <div className='app-main-container'>
      <img src={image} alt='img' />
      <h1>React Todo-List</h1>
      <div className='todo-list-container'>
        <h2>My To-do List</h2>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
