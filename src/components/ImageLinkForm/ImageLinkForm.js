import React from 'react';
import './ImageLinkForm.css'
import 'tachyons';

function ImageLinkForm(props) {
    return (
        // use in-line style css to add the style for "Sign Out"
        // in the JAX syntax, we actually pass a JS object as CSS style to the 
        // JAX elements
        <div>
            <p className='f3 preWrap'>
                {'This AI tool will detect faces in your pictures.\n Enter a picture link to give it a try.'}
            </p>
            <div className='center'>
                <div className='pa4 br3 shadow-5 form'>
                    <input className='f4 pa2 w-70' type='text'/>
                    <button className='f4 w-30 grow link ph3 pv2 dib black bg-washed-yellow'>detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;