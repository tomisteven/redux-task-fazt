import './App.css';
import {
  useSelector
} from "react-redux"
import TaskList from './app/components/TaskList';
import TaskForm from './app/components/TaskForm';
import {BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  const taskState = useSelector(state => state.task)

  console.log(taskState);

  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className='flex items-center justify-center h-full'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
