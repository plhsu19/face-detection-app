import React from 'react';
import 'tachyons';

// inherit the react
class Signin extends React.Component {

    // define the state of the Signin component, consists of signin informations
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    // mothod for handling the event of email change in input
    onEmailChange = (event) => {
        this.setState({
            signInEmail: event.target.value
        })
    }

    // mothod for handling the event of email change in input
    onPasswordChange = (event) => {
        this.setState({
            signInPassword: event.target.value
        })
    }

    // method when click on the submit of signin information:
    // 1. send the signin information as request to server
    // 2. change the App's route/state upon receiving the response with 'success' 
    onSubmitSignIn = (event) => {
        // fetch return a promise resolved by the response (Response object)
        fetch('http://localhost:3000/signin/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(
            user => {
                if (user.id) { // check if user.id exist. whether the server responded with a user profile?
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email" name="email-address" id="email-address"
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password" name="password" id="password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
                                type="submit" value="Sign in" onClick={this.onSubmitSignIn} />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={ () => onRouteChange('register')} 
                            className="f5 link dim black db pointer">Register</p>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default Signin;