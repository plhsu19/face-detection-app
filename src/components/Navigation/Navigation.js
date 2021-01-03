import React from 'react';
import 'tachyons';

function Navigation({ onRouteChange }) {
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
}

export default Navigation;