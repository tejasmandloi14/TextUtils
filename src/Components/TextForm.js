import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleDownClick =()=>{
        console.log("Lowercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick =()=>{
        console.log("Clear Text was clicked" + text)
        let newText = '';
        setText(newText)
    }

    const handleOnChange =(event)=>{
        console.log("Changing handle")
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Your Text Here !');
    return (
        <>
        <div className="container my-3">
        <h2>{props.heading}</h2>
            <div className="mb-4">
                <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
            <button className="btn btn-primary mx-4" onClick={handleDownClick}>LowerCase</button>
            <button className="btn btn-danger " onClick={handleClearClick}>Clear Text</button>
            <div>
                <h2 className='my-4'>Text Summary - </h2>
                <p>{text.split(" ").length} Words and Characters  {text.length}</p>
            </div>
        </div>
        </>
    )
}
