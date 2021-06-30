import React from 'react';
import Box from './Box/Box'
import 'tachyons';

function Detection({ boxes, imageUrl }) {

    const boxArray = boxes.map((box, i) => {
        return (
            <Box
                key={i} topRow={box.topRow} rightCol={box.rightCol}
                bottomRow={box.bottomRow} leftCol={box.leftCol}
            />
        )
    })

    return (
        // use in-line style css to add the style for "bounding-box"
        // in the JAX syntax, we actually pass a JS object as CSS style to the 
        // JSX elements
        <div className='center'>
            {/* set the top margin */}
            <div className='mt4 absolute'>
                <img id='inputImage' alt='sample' src={imageUrl} width='900px' height='auto' />
                {
                    boxes.length
                        ? boxArray
                        : <div></div>
                }
            </div>
        </div>
    )
}

export default Detection;