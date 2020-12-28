import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Detection from './components/Detection/Detection';
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
      imageUrl: '',
      box: {},
    }
  }

  // calculate the detected object location from the API's response
  calculateObjectLocation = (data) => {
    // bounding contains 4 numbers representing the percentage of the image
    const objectLocation = data.outputs[0].data.regions[0].region_info.bounding_box;

    // image DOM manupulation
    const image = document.getElementById('inputImage');
    const width = Number(image.width)
    const height = Number(image.height)
    console.log(width, height)
    return {
      leftCol: width * objectLocation.left_col, 
      toprow: height * objectLocation.top_row,
      rightCol: width - width * objectLocation.right_col,
      bottomRow: height - height * objectLocation.bottom_row,
    }
  }

  // use arrow function to make sure the method point back to the App object
  // argument: event => the event object that triggered by the user, i.e., changing the 
  // content of the input form (text)
  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  // method for submit the image URL when 'submit button' is clicked
  onButtonSubmit = () => {
    // setState() is an asynchronous process, which may not executed immediately
    // use componentDidUpdate() to make sure the following processes fire after the setState is finished
    this.setState({
      imageUrl: this.state.input
    })
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
       this.state.input)
    .then((response) => {
      console.log(this.calculateObjectLocation(response));
      return this.calculateObjectLocation(response)})
    .catch((err) => console.log(err))
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
        <Detection imageUrl={this.state.imageUrl} />
      </div>
    );

  }
}

export default App;
