import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Game from './pages/game/Game';
import Navbar from './components/ui/navbar';
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
};

export default App;
