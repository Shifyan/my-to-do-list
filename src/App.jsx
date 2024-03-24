import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';

function App() {
  const [task, setTask] = useState([]);
  const [newTasek, setNewTask] = useState('');
  return (
    <>
      <div className="main py-28">
        <Navbar />
        <div className="main my-10 mx-5">
          <div className="my-5">
            <div className="flex justify-center items-center">
              <input
                type="text"
                name="inputTask"
                id="input-task"
                className="w-96 h-12 text-black text-xl rounded px-2"
                placeholder="Add Task ...."
                required
              />
              <button
                type="submit"
                className=" p-3 ms-1 bg-green-600 hover:bg-green-800 transition-colors duration-500 rounded"
              >
                Tambah
              </button>
            </div>
          </div>
          <div className="my-5">
            <div className="bg-white rounded py-5 flex flex-row text-black text-lg items-center">
              <div className="basis-1/12 flex justify-center">
                <p>1. </p>
              </div>
              <p className="basis-5/12">Shifyan Almustafid</p>
              <div className="basis-2/12">
                <button className="p-2 text-white bg-red-600 hover:bg-red-800 transition-colors duration-500 rounded">
                  Delete
                </button>
              </div>
              <div className="basis-2/12">
                <button className="p-2 text-white bg-blue-600 hover:bg-blue-800 transition-colors duration-500 rounded">
                  Move Up
                </button>
              </div>
              <div className="basis-2/12">
                <button className="p-2 text-white bg-blue-600 hover:bg-blue-800 transition-colors duration-500 rounded">
                  Move Down
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
