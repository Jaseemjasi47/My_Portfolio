import './App.css';
// import VideoBackground from './Components/BGVideo';
// import Introduction from './Components/Introduction';
// import AnimatedProfession from './Components/AnimatedProfession';
import Intro from './Pages/Intro';
import SocialMediaIcons from './Components/SocialMediaIcons';


function App() {
  return (
    <div className="App background-image-container">
      {/* <VideoBackground/>
      <div className="balckshade">
      <Introduction />
      <AnimatedProfession/>
      </div> */}
      <Intro/>
      {/* <SocialMediaIcons/> */}
    </div>
  );
}

export default App;
