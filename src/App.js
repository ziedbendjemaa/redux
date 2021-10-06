
import './App.css';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import FilterTask from './Components/FilterTask';
function App() {
  return (
    <div className="App">
      <AddTask/>
     <TaskList/>
    <FilterTask/>
    </div>
  );
}

export default App;
