import React from 'react';
import 'tachyons';
import './Detection.css'

function Detection({ box, imageUrl }) {
    return (
        // use in-line style css to add the style for "bounding-box"
        // in the JAX syntax, we actually pass a JS object as CSS style to the 
        // JSX elements
        <div className='center'>
            {/* set the top margin */}
            <div className='mt4 absolute'>
                <img id='inputImage' alt='sample' src={imageUrl} width='900px' height='auto' />
                {/* bounding-box could be made into a scalable component in the future */}
                <div className='bounding-box' 
                style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default Detection;