import React, { useState } from 'react'

export default function Forms(props) {
    const [text, setText] = useState(""); // this is for textarea 
    const [headerText, headerSetText] = useState("");// this is for header



    function toUpper() {
        let newupperText = text.toUpperCase()
        setText(newupperText)
    }
    function toLower() {
        let newlowerText = text.toLowerCase()
        setText(newlowerText)
    }
    function textOnchange(event) {
        setText(event.target.value)
    }


    function headertopic(event) {
        console.log("successfully")
        headerSetText(event.target.value)
    }
    const takeStyle = {
        height: "100vh"
    }

    const toClear = () => {
        setText("")

    }

    const toCopy = () => {
        toCopy(headerText)
    }





    return (
        <>
            <div className={`setAllColors bg-${props.mode}`} style={takeStyle}>

                <div className="mb-3 container">
                    <label htmlFor="exampleFormControlInput1" className={`form-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.topic} </label>
                    <input className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} onChange={headertopic} value={headerText} id="exampleFormControlInput1" />
                </div>
                <div className="mb-3 container">
                    <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode === 'light' ? 'dark' : 'light'}`} > {props.heading} </label>
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} value={text} onChange={textOnchange} id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button className="btn btn-primary my-3" onClick={toUpper}>To UpperCase</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={toLower}>To LowerCase</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={toClear}>Clear All</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={toCopy}>Copy</button>
                </div>
                <div className="mb-3 container">
                    <h2 className={` text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your Summary</h2>
                    <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length}</p>
                </div>
                <div className="mb-3 container">
                    <h5 className={` text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your Text Preview</h5>

                    <div className="mx-3 container">
                        <label htmlFor="inputPassword2" className="visually-hidden"></label>
                        <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} type="text" value={text.split()} id="inputTextView" placeholder="" />
                        <button className="btn btn-primary my-3" id="addNotes" >Add Note</button>
                    </div>


                </div>


            </div>
        </>
    )
}
