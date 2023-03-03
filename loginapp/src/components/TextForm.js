import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpCase = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase(); 
        setText(newText);
        // props.showAlert("converted to uppercase!", "success");
    }
    const handleLoCase = ()=>{
      // console.log("Lower was clicked" + text);
      let newText = text.toLowerCase(); 
      setText(newText);
      // props.showAlert("converted to lowercase!", "success");
  }
  const handleClear = ()=>{
    let clearText = " "; 
    setText(clearText);
    // props.showAlert("Clear!", "success");
  }


const handleCapCase = ()=> {
  // let newText = text.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  let newText = text.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
  setText(newText);
  // props.showAlert("converted to Capitalize!", "success");
  }


const handleCopy = ()=> {
  console.log("I am copy");
  var text = document.getElementById("myBox");
  text.select();
  text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
  // props.showAlert("Copied!", "success");
  }


const handleExtraSpace = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  // props.showAlert("Extra spaces removed!", "success");
  
}
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
   

const [text, setText] = useState('Write here')
// text = "Write Text"; // wrong way to change the state
// setText("write Text");  // correct way to change the state
  return (
    <>
    <div className="container" styel={{color: props.mode=== 'dark'?'white':'#042743'}}>
    <h2>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} 
  styel={{backgroundColor: props.mode=== 'dark'?'grey':'white', color: props.mode=== 'dark'?'white':'#042743'}}
  id="myBox" rows="6"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpCase}>Convert to Uppercase</button>
<button className="btn btn-primary mx-3" onClick={handleLoCase}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCapCase}>Capitalize</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Extra Space</button>
</div>

<div className="container my-2" styel={{color: props.mode=== 'dark'?'white':'#042743'}}>
  <h3>Your text summary</h3>
  <p>{text.split(" ").length} words, {text.length} characters</p>
  <p>{0.008 * text.split(" ").length}Minutes read</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:"Enter something to preview it here"}</p>
</div>
    </>
  )
}
