import './App.css';
import FrontPages from './pages/FrontPages';
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<FrontPages />} />
      </Routes>
    </div>
  );
}

export default App;
