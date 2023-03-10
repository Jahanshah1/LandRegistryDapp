import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Application from './components/Application';
import Mapp from './components/Mapp'

const App = () => {
  return(
    <div>
        
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Application" element={<Application />} />
        <Route path='/Map' element={<Mapp />} />
      </Routes>

    
    </div>
  )
}
export default App;
