import React from 'react'
import "./Styles/Container.css"
import InputField from './InputField'
import Buttons from './Buttons'
import { useState } from "react";
const Container = () => {
 let[val,setVal]=useState("");
const clicked=(buttonText)=>{
        if(buttonText==="C"){
          setVal("");
        }
       else if(buttonText==="="){
        let result=eval(val);
        setVal(result);
       }
       else{
        setVal(val+buttonText);
       }
        
 
 
}


  return (
 <center>
  <h1> Welcome to Calculator</h1>
   <div className="rectangle">
   <InputField  displayValue={val} ></InputField>
   <Buttons  onButtonClick={clicked} />

   </div>
  
 </center>
  )
}

export default Container