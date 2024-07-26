import { Fragment, useState } from 'react'
import { evaluate } from 'mathjs'
import './App.css'


const App=()=>{
  const [input,setInput]=useState("")
  const [result, setResult]=useState()
  const buttons= [
    "AC","%","⌫","÷",
    "7","8","9","*",
    "4","5","6","-",
    "1","2","3","+",
    "0",".","="
  ];
  
  const handleClick=(value)=>{
    if (value==="AC"){
      handleClear();
    }else if (value==="="){
      handleCalculate();
    }else if (value==="⌫") {
    handleBackspace();
    }else{
      setInput(input+value);
    }
  }
  const handleClear =()=>{
    setInput("");
    setResult("");
  }
  const handleBackspace=()=>{
    setInput(input.slice(0,-1))
  }
  const handleCalculate=()=>{
    try { 
      setResult(eval(input).toString());
    } catch(error){
      setResult('Error')
    }
  }
 
  return (
    <div className="container">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="calculator-wrapper">
        <div className="calculator">
          <div className="display">
            <div className='box'>blank</div>
            <h2 className='result'>{result||input}</h2>
            <div className='box2'>blank</div>
          </div> 
          <div className="buttons-wrapper">
             <div className='buttons'>
                {buttons.map((button,index)=>{
                 return (<button key={index} onClick={()=>handleClick(button)} className='buttons'>{button}</button>)
                })}
            </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default App;
