import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import particleParameter from './particlePara';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles params={particleParameter} className='particle' />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceDetection /> */}
      </div>
    );

  }
}

export default App;
