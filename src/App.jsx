import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function App() {
  const [todo, settodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentEdit, setCurrentEdit] = useState(null);

  function addTodo() {
    if (currentEdit) {
    
      setTodos(
        todos.map((item) =>
          item.id === currentEdit.id ? { ...item, todo: todo } : item
        )
      );
      setCurrentEdit(null); 
    } else {
      
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    }
    settodo(""); 
  }

  
  function handleChange(e) 
  {
    settodo(e.target.value);
  }


  function handleEdit(id) {
    const itemToEdit = todos.find((item) => item.id === id);
    if (itemToEdit) 
    {
      settodo(itemToEdit.todo); 
      setCurrentEdit(itemToEdit); 
    }
  }

 
  function handleDelete(id) {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="flex flex-col max-w-screen min-h-screen overflow-y-auto overflow-x-hidden backdrop-blur-lg bg-slate-400">
      <Navbar />
      <div className="h-[80vh] w-6/12 mt-10 mx-auto rounded-lg text-black border-1 bg-white bg-opacity-10 shadow-sm shadow-white overflow-y-auto overflow-x-hidden">
        {/* Input Field and Add Button */}
        <div className="flex flex-row items-center gap-3 mt-8 ml-28 w-2/3">
          <input
            type="text"
            onChange={handleChange}
            value={todo}
            className="w-full pl-5 py-2 text-black border border-gray-300 rounded-lg"
            placeholder="Enter text here"
          />
          <button onClick={addTodo}>
            <AddCircleIcon
              className="inline-block ml-2 text-blue-500 scale-110 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-blue-700"
              fontSize="large"
            />
          </button>
        </div>
        <div className="todos">
          {todos.map((item) => (
            <Todo
              key={item.id}
              id={item.id}
              content={item.todo}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
