import React from 'react';
import 'tachyons';
import './Logo.css'

function Logo(props) {
    return (
        // use in-line style css to add the style for "Sign Out"
        // in the JAX syntax, we actually pass a JS object as CSS style to the 
        // JAX elements
        <div className='ma4 mt0'>
        <img src={"./logo_transparent.png"} alt='logo'/>
        </div>
    )
}

export default Logo;