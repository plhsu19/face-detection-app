import React from 'react';
import 'tachyons';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            registerFail: false
        };
    }

    // mothod for handling the event of name change in input
    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    // mothod for handling the event of email change in input
    onEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    // mothod for handling the event of email change in input
    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    // method called when click on the submit of register information:
    // 1. send the register information as a POST request to server
    // 2. change the App's route/state upon receiving the response with the user profile (in JSON)
    // TODO: dispaly "signin fail" if receive "fail" from server
    onSubmitRegister = (event) => {
        // fetch return a promise resolved by the response (Response object)
        fetch('https://arcane-bastion-78521.herokuapp.com/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
        .then(response => response.json())
        .then(
            user => {
                if (user.id) {
                    // update the responded user profile as a temp profile into the frontend APP
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
                else {
                    this.setState({
                        registerFail: true
                    })
                }
            })
    }

    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="regiester" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f5" htmlFor="name">Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text" 
                                    name="name" 
                                    id="name"
                                    onChange={ this.onNameChange} />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email" 
                                    name="email-address" 
                                    id="email-address"
                                    onChange={ this.onEmailChange} />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password" 
                                    name="password" 
                                    id="password"
                                    onChange={ this.onPasswordChange} />
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba bw1 b--black bg-transparent grow pointer f5 dib"
                                type="submit" 
                                value="Register" 
                                onClick={this.onSubmitRegister} />
                        </div>
                        {
                            this.state.registerFail
                                ? <div className="f5 pv4 red b">
                                    {"register failed"}
                                </div>
                                : <div></div>
                        }
                    </div>
                </main>
            </article>
        )
    }

}

export default Register;