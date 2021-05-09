// React is only a variable name we use to import the module 'react'
// it could be any name, e.g., import r from 'react'
import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particleParameter from './particlePara';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Detection from './components/Detection/Detection';
import Clarifai from 'clarifai';

// since we use create-react-app (with ES6 module system), 
// we can use 'import' syntax here instead of commonJS way ,ie, 'require', of importing

// initialize the client for image recognition API
const app = new Clarifai.App({
  apiKey: 'dec2654d72a643e29103a7a33dd7eb4b'
});

// initial state when route change to the sign in page
const initialState = {
  input: '',
  imageUrl: 'https://static.dw.com/image/17321990_303.jpg',
  box: {},
  // the route state keeps track of where we are on the page
  // to control the status and display of the webapp.
  route: 'signin',
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

// smart component for the application
class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  // calculate the detected object location from the API's response
  calculateObjectLocation = (data) => {
    // bounding contains 4 numbers representing the percentage of the image
    const objectLocation = data.outputs[0].data.regions[0].region_info.bounding_box;

    // image DOM manupulation
    const image = document.getElementById('inputImage');
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: width * objectLocation.left_col,
      topRow: height * objectLocation.top_row,
      rightCol: width - width * objectLocation.right_col,
      bottomRow: height - height * objectLocation.bottom_row,
    }
  }

  setBoundingBox = (box) => {
    this.setState({ box: box });
  }

  // load the user profile sent by server after register success into the App
  loadUser = (data) => {
    this.setState(
      {
        user: {
          id: data.id,
          name: data.name,
          email: data.email,
          entries: data.entries,
          joined: data.joined
        }
      }
    )
  }

  // use arrow function to make sure the method point back to the App object
  // argument: event => the event object that triggered by the user, i.e., changing the 
  // content of the input form (text)
  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  // function for route(state) change: signin <-> home <-> register
  onRouteChange = (nextRoute) => {
    if (nextRoute === 'signin') this.setState(initialState);
    else {
      this.setState({
        route: nextRoute
      })
    }
  }

  // method for submit the image URL when 'submit button' is clicked
  onPictureSubmit = () => {
    // setState() is an asynchronous process, which may not executed immediately
    // use componentDidUpdate() to make sure the following processes fire after the setState is finished
    this.setState({
      imageUrl: this.state.input
    })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => { // the response fetched from app.models.predict probably is already parsed into a JS object (.json())

        // if response is not empty, increase entries in user's profile
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              // Object.assign() returns the target object updated with source object
              let user = Object.assign(this.state.user, { entries: count });
              this.setState({ user })
            })
            .catch(console.log) // error handling
        }
        this.setBoundingBox(this.calculateObjectLocation(response))
      })
      .catch((err) => console.log(err))
  }


  render() {
    const { route, box, imageUrl } = this.state;
    return (
      <div className="App">
        <Particles params={particleParameter} className='particle' />
        <Navigation onRouteChange={this.onRouteChange} route={route} />
        {
          route === 'home'
            ? <div>
              <Logo />
              <Rank userName={this.state.user.name} userEntries={this.state.user.entries} />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onPictureSubmit={this.onPictureSubmit}
              />
              <Detection box={box} imageUrl={imageUrl} />
            </div>
            : (route === 'signin'
              ? <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
              : <Register // route == 'register'
                loadUser={this.loadUser}
                onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );

  }
}

export default App;
