import React from 'react';
import 'tachyons';

function Detection({ imageUrl }) {
    return (
        // use in-line style css to add the style for "Sign Out"
        // in the JAX syntax, we actually pass a JS object as CSS style to the 
        // JAX elements
        <div className='center'>
            {/* set the top margin */}
            <div className='mt4 absolute'>
                <img id='inputImage' alt='sample' src={imageUrl} width='900px' height='auto' />
            </div>
        </div>
    )
}

export default Detection;