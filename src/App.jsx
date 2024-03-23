import './App.css';
import AddItem from './components/addItem';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="main my-10">
        <AddItem />
      </div>
    </>
  );
}

export default App;
