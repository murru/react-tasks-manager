import './App.css'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="w3-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div className="w3-padding-64 w3-padding-large w3-center">
        <h1>Tasks Manager</h1>
        <TaskForm />
        <br />
        <br />
        <TaskList />
      </div>
    </div>
  );
}

export default App;