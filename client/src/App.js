import './App.css';
import FrontPages from './pages/FrontPages';
import { Routes, Route} from "react-router-dom";
import HomePages from './pages/HomePages';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/invitation" element={<FrontPages />} />
        <Route path="/home" element={<HomePages />} />
      </Routes>
    </div>
  );
}

export default App;
