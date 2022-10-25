import { Routes, Route } from 'react-router-dom';
import './App.css';
import Naavigation from './component/Navigation';
import CreateGuest from './pages/CreateGuest';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App scroll-smooth bg-yellow-500 pt-5 relative">
      <Naavigation />
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/create' element={<CreateGuest/>}/>
      </Routes>
    </div>
  );
}

export default App;
