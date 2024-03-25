import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleInputeChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== '') {
      setTasks((task) => [...task, newTask]);
      setNewTask('');
    }
  }

  function deleteTask(index) {
    const updateTask = tasks.filter((_, i) => {
      return i !== index;
    });

    setTasks(updateTask);
  }

  function moveUp(index) {
    if (index > 0) {
      const updateTask = [...tasks];
      [updateTask[index], updateTask[index - 1]] = [
        updateTask[index - 1],
        updateTask[index],
      ];
      setTasks(updateTask);
    }
  }

  function moveDown(index) {
    if (index < tasks.length - 1) {
      const updateTask = [...tasks];
      [updateTask[index], updateTask[index + 1]] = [
        updateTask[index + 1],
        updateTask[index],
      ];
      setTasks(updateTask);
    }
  }
  return (
    <>
      <div className="main py-16">
        <Navbar />
        <div className="main my-10 ">
          <div className="my-10">
            <div className="flex justify-center items-center">
              <input
                type="text"
                name="inputTask"
                id="input-task"
                className="w-96 h-12 text-black text-xl rounded px-2"
                placeholder="Add Task ...."
                value={newTask}
                onChange={handleInputeChange}
                required
              />
              <button
                type="submit"
                className=" p-3 ms-1 bg-green-600 hover:bg-green-800 transition-colors duration-500 rounded"
                onClick={addTask}
              >
                Tambah
              </button>
            </div>
          </div>
          <div className="my-5 mx-5">
            <ul>
              {tasks.map((task, index) => {
                return (
                  <li key={index} className="my-2">
                    <div className="bg-white rounded py-5 flex flex-row text-black text-lg items-center ">
                      <div className="basis-1/12 flex justify-center">
                        <p>{index + 1}</p>
                      </div>
                      <p className="basis-5/12">{task}</p>
                      <div className="basis-2/12">
                        <button
                          onClick={() => deleteTask(index)}
                          className="p-2 text-white bg-red-600 hover:bg-red-800 transition-colors duration-500 rounded"
                        >
                          Delete
                        </button>
                      </div>
                      <div className="basis-2/12">
                        <button
                          onClick={() => moveUp(index)}
                          className="p-2 text-white bg-blue-600 hover:bg-blue-800 transition-colors duration-500 rounded"
                        >
                          Move Up
                        </button>
                      </div>
                      <div className="basis-2/12">
                        <button
                          onClick={() => moveDown(index)}
                          className="p-2 text-white bg-blue-600 hover:bg-blue-800 transition-colors duration-500 rounded"
                        >
                          Move Down
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
