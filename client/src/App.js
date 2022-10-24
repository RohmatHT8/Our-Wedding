import { useState } from 'react';
import './App.css';
import FrontPages from './pages/FrontPages';
// import { Routes, Route} from "react-router-dom";
import HomePages from './pages/HomePages';
function App() {
  const [isActive, setIsActive] = useState(true)
  const handleIsActive = () => {
    setIsActive(false)
  }
  return (
    <div className="App scroll-smooth">
      {isActive ? <FrontPages handleIsActive={handleIsActive}/> : <HomePages />}
    </div>
  );
}

export default App;
