import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLink from "./components/ImageLink/ImageLink";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";

function App() {
  return (
    <div className="App">
      <Particles
        className="zindex"
        params={{
          particles: {
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLink />

      {/* 
        
    <FaceRecognition/> */}
    </div>
  );
}

export default App;
