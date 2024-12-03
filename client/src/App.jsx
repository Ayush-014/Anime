import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/header/Navbar';
import Home from './pages/Home/Home';
import Show from './pages/Show/Show';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Footer from './components/footer/Footer';
import Movies from "./pages/Movies/Movies";
import Main from "./pages/Main/Main";
import Search from "./pages/Search/search";

function App() {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
      <div>
          <Router>
            {/* <Navbar /> */}
            <Routes>
              <Route exact path='/' element={<Main />} />
              <Route exact path='/home' element={<Home />} />
              <Route exact path="/show/:id" element={<Show/>} />
              <Route exact path='/search/:id' element={<Search />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/movies' element={<Movies />} />
              <Route exact path='/about' element={<About 
                     userId="sandy"
                     emailId="sandy4645@gmail.com"
                     password="sandyFromDelhi"
              />} />
            </Routes>
          </Router>
      </div>
  );
}

export default App;
