import React from 'react'
 import "./Styles/InputField.css"
const InputField = ({displayValue}) => {
  

  return (
    <div > 
      <input type="text" id="userInput" name="userInput" className="inputField"  value={displayValue} readOnly></input>
    </div>
  )
}

export default InputField