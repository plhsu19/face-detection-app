import React from 'react';
import 'tachyons';

function Rank(props) {
    return (
        // use in-line style css to add the style for "Sign Out"
        // in the JAX syntax, we actually pass a JS object as CSS style to the 
        // JAX elements
        <div>
            <div className='f2 purple'>
                {'Hi Pei, your current rank is'}
            </div>
            <div className='f2 purple'>
                {'#1'}
            </div>
        </div>
    )
}

export default Rank;