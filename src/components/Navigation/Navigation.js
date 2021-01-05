import React from 'react';
import 'tachyons';

function Navigation({ onRouteChange, route }) {
    // if the route state is 'home', meaning the app is now 'signed in'
    // nav displays 'signout' selection
    if (route === 'home')
        return (
            // use in-line style css to add the style for "Sign Out"
            // in the JAX syntax, we actually pass a JS object as CSS style to the 
            // JAX elements
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p className='f3 link black dim underline pa3 pointer'
                    onClick={() => onRouteChange('signin')}>
                    {'Sign Out'}
                </p>
            </nav>
        )
    // if the route state is 'signin' or 'register', meaning the app is now 'signed out'
    // nav display 'signin' and 'register' selection
    else
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p className='f3 link black dim underline pa3 pointer'
                    onClick={() => onRouteChange('signin')}>
                    {'Sign In'}
                </p>
                <p className='f3 link black dim underline pa3 pointer'
                    onClick={() => onRouteChange('register')}>
                    {'Register'}
                </p>

            </nav>
        )
}

export default Navigation;