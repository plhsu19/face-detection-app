import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import particleParameter from './particlePara';
import Clarifai from 'clarifai';

// since we use create-react-app (with ES6 module system), 
// we can use 'import' syntax here instead of commonJS way ,ie, 'require', of importing

// initialize the client for image recognition API
const app = new Clarifai.App({
  apiKey: 'dec2654d72a643e29103a7a33dd7eb4b'
 });

// smart component for the application
class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  // use arrow function to make sure the method point back to the App object
  // argument: event => the event object that triggered by the user, i.e., changing the 
  // content of the input form (text)
  onInputChange = (event) => {
    console.log(event.target.value);
  }

  // method for submit the image URL when 'submit button' is clicked
  onButtonSubmit = () => {
    app.models.predict("d02b4508df58432fbb84e800597b8959", "https://www.tagvenue.com/blog/wp-content/uploads/2019/08/christmas-party-games-1024x682.jpg")
    .then(
      function(response) {
        console.log(response)
      },
      function(error) {
        // do something if error returned
      }
    )
  }

  render() {
    return (
      <div className="App">
        <Particles params={particleParameter} className='particle' />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* <FaceDetection /> */}
      </div>
    );

  }
}

export default App;
