import React from 'react';
import './ImageLinkForm.css'
import 'tachyons';

function ImageLinkForm(props) {
    // deconstruct the parameter object 'props' into individual variables
    const { onInputChange, onButtonSubmit } = props;
    return (
        // use in-line style css to add the style for "Sign Out"
        // in the JAX syntax, we actually pass a JS object as CSS style to the 
        // JAX elements
        <div>
            <p className='f3 preWrap'>
                {'This AI tool detects faces in your pictures. Enter a link of .jpg to try:'}
            </p>
            <div className='center'>
                <div className='form pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70' type='text' onChange={onInputChange} />
                    <button className='f4 w-30 grow bn link ph3 pv2 dib black bg-washed-yellow'
                        onClick={onButtonSubmit}>detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;