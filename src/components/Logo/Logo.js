import React from 'react';
import logo from './Facer_logo.png';
import './Logo.css'

function Logo(props) {
    return (
        // use in-line style css to add the style for "Sign Out"
        // in the JAX syntax, we actually pass a JS object as CSS style to the 
        // JAX elements
        <div className='logo'>
                <img className="pa2 br2 w-20-l w-34-ns " src={logo} alt='logo'/>
        </div>
    )
}

export default Logo;