import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UPERCASE', 'success');
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase', 'success');
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Text Cleared', 'success');
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Copy to Clipboard', 'success');
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Removed extra spaces', 'success');
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={ {color: props.mode==='dark'?'white':'#042743'} }>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="6" style={ {backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white', color: props.mode==='dark'?'white':'#042743'} }></textarea>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container" style={ {color: props.mode==='dark'?'white':'black'} }>
            <h2>Your text Summary</h2>
            <p> {text.split(/\s+/).filter( (element) => {return element.length!==0}).length} word and {text.length} characters </p>
            <h3>Preview</h3>
            <p>{text.length>0 ? text: 'Nothing to preview!'}</p>
        </div>
        </>
    )
}
