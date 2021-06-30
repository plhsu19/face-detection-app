import React from 'react';
import 'tachyons';

function Rank(props) {
    const {userName, userEntries} = props;
    return (
        // use in-line style css to add the style for "Sign Out"
        // in the JAX syntax, we actually pass a JS object as CSS style to the 
        // JAX elements
        <div>
            <div className='f2'>
                {`Hi ${userName}, you have so far detected ${userEntries} photos`}
            </div>
        </div>
    )
}

export default Rank;