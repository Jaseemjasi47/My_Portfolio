import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from './Pages/Intro';
import Contact from './Pages/Contact'; 
import Portfolio from './Pages/Portfolio'; 
import Footer from './Components/Footer';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import BottomBar from './Components/BottomBar';

function App() {
  return (
    <Router>
      <>
      <NavBar />
      <div className="App bg">
        <Routes>
          {/* <Route path="/" element={<Intro />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </div>
      {/* <BottomBar /> */}
      </>
    </Router>
  );
}

export default App;
