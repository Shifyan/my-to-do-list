import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-center bg-white py-5">
        <a
          href="#"
          className="text-lg font-semibold underline underline-offset-2"
        >
          My To Do List
        </a>
      </nav>
      <div className="my-80 flex justify-center align-middle">
        <div>
          <input type="text" />
        </div>
      </div>
    </>
  );
}

export default App;
