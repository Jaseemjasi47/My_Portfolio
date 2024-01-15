import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from './Pages/Intro';
import Contact from './Pages/Contact'; 
import Portfolio from './Pages/Portfolio'; 
import Navbar from './Pages/Navbar';
import SocialMediaIcons from './Components/SocialMediaIcons';

function App() {
  return (
    <Router>
      <div className="App bg">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <SocialMediaIcons/>
      </div>
    </Router>
  );
}

export default App;
