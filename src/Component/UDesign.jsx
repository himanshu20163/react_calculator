import React from 'react'
import './design.css'
import { useState } from 'react';


function UDesign() {
  const[history,sethistory] = useState('0');
  const[value,setvalue] = useState('');
  const cal = (e) =>{
    sethistory(history.concat(e.target.value));
  }
  const equal = () =>{
     setvalue(eval(history).toString());
  }
  const clear= ()=> {
     setvalue('');
     sethistory('');
  }
  return (
    <div className='main_box'>
        <div className='main_cal'>
            <div id='display_data'>
                 <h6 style={{textAlign:"right",marginRight:"15px",marginTop: "10px"}}>{history}</h6>
                 {console.log(value)}
                <h4 style={{textAlign:"right",marginRight:"15px",marginTop: "-1rem"}}>{value}</h4>
            </div>
            <div id="operation">
                <button id="AC" value="AC" onClick={clear}>AC</button>
                <button id="divide" className='num' value="/" onClick={cal}>/</button>
                <button id="multiply" value="*" onClick={cal}>x</button>
                <button id="seven " className='num' value="7" onClick={cal}>7</button>
                <button id="eight" className='num' value="8" onClick={cal}>8</button>
                <button id="nine"  className='num' value="9" onClick={cal}>9</button>
                <button id="minus"  value="-" onClick={cal}>-</button>
                <button id="four"  className='num' value="4" onClick={cal}>4</button>
                <button id="five" className='num' value="5" onClick={cal}>5</button>
                <button id="six" className='num' value="6" onClick={cal}>6</button>
                <button id="plus" value="+" onClick={cal}>+</button>
                <button id="one" className='num' value="1" onClick={cal}>1</button>
                <button id="two" className='num' value="2" onClick={cal}>2</button>
                <button id="three" className='num' value="3" onClick={cal}>3</button>
                <button id="equal" value="=" onClick={equal}>=</button> 
                
                <button id="zero" value="0" onClick={cal}>0</button>
                <button id="dot" className='num' value="." onClick={cal}>.</button>
                
                {console.log(...history)}
                </div>  
            </div>
        </div> 
  )
}

export default UDesign
