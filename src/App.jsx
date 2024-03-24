import './App.css';
import AddItem from './components/addItem';
import Navbar from './components/navbar';
import Content from './components/content';

function App() {
  return (
    <>
      <Navbar />
      <div className="main my-10 mx-5">
        <div className="my-5">
          <AddItem />
        </div>
        <div className="my-5">
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
