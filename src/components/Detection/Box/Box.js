import React from 'react';
import 'tachyons';
import './Box.css';

function Box({ topRow, rightCol, bottomRow, leftCol }) {
    return (
        <div className='bounding-box'
            style={{ top: topRow, right: rightCol, bottom: bottomRow, left: leftCol}}></div>
    )
}

export default Box;