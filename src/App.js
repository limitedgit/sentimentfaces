import './App.css';
import Sentiment from 'sentiment';
import {useState} from 'react';
import neutralFace from "./faces/neutralface.png"
import happyFace1 from "./faces/happyface1.png"
import happyFace2 from "./faces/happyface2.png"
import sadFace1 from "./faces/sadface1.png"
import sadFace2 from "./faces/sadface2.png"




function App() {

const [text, changeText] = useState("");
const [face, changeFace] = useState(0);
const sentiment = new Sentiment();

const handleChange = (event) => {
  changeText(event.target.value);
  try {
    let result = sentiment.analyze(text);
    changeFace(result.score);
    console.log(face)
  } catch (e){
    console.log(e);
  }
}


const renderFace = () =>{

  if (face < -5){
    return (
      <img className = "face" src={sadFace2} alt="very sad face" />
    )
  } else if (face > 5){
    return (
      <img className = "face" src={happyFace2} alt="very happy face" />
    )
  }else if (face < 0){
    return (
      <img className = "face" src={sadFace1} alt="sad face" />
    )
  } else if (face > 0){
    return (
      <img className = "face" src={happyFace1} alt="happy face" />
    )
  } else{
    return (
      <img className = "face" src={neutralFace} alt="neutral face" />
    )

  }
  
}




  return (
    <div className="App">
      <div className= "App-header"> 

      <label>
        Enter a sentence and website will analyze emotion
        </label>
        <input className = "input" type="text-area"  value={text} onChange={(e) => handleChange(e)} />
   
  
    {renderFace()}
    </div>
    </div>
  );
}

export default App;
