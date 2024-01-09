import React from 'react'
import Introduction from './../Components/Introduction';
import AnimatedProfession from './../Components/AnimatedProfession';

function Intro() {
  return (
    <div>
      {/* <VideoBackground/> */}
      <div className="balckshade">
      <Introduction />
      <AnimatedProfession/>
      </div>
    </div>
  )
}

export default Intro
