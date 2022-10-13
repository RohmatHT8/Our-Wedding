import './App.css';
import { AiFillHome, AiFillHeart, AiFillPicture } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md"
import Beranda from './components/Beranda';
import Mempelai from './components/Mempelai';
import Acara from './components/Acara';
import Photo from './components/Photo';
import RSVP from './components/RSVP';
function App() {
  return (
    <div className="App">
      <nav className='fixed-bottom navbar'>
        <a className='text-center icon text-decoration-none' href='#home'>
          <div><AiFillHome /></div>
          <div className='navIconTitle'>Beranda</div>
        </a>
        <a href='#mempelai' className='text-center icon text-decoration-none'>
          <div>
            <div><AiFillHeart /></div>
            <div className='navIconTitle'>Mempelai</div>
          </div>
        </a>
        <a href='#acara' className='text-center icon text-decoration-none'>
          <div>
            <div><FaCalendarAlt /></div>
            <div className='navIconTitle'>Acara</div>
          </div>
        </a>
        <a href='#photo' className='text-center icon text-decoration-none'>
          <div>
            <div><AiFillPicture /></div>
            <div className='navIconTitle'>Photo</div>
          </div>
        </a>
        <a href='#rsvp' className='text-center icon text-decoration-none'>
          <div>
            <div><MdQuestionAnswer /></div>
            <div className='navIconTitle'>RSPV</div>
          </div>
        </a>
      </nav>
      <Beranda />
      <Mempelai />
      <Acara />
      <Photo />
      <RSVP />
    </div>
  );
}

export default App;
