import React from 'react'
import './Styles/ToggleButton.css'
const ToggleButton = () => {
  return (
    <div className="toggle-container">
    <input type="checkbox" id="toggle" className="toggle-checkbox" />
    <label htmlFor="toggle" className="toggle-label">
      <span className="toggle-inner" />
      <span className="toggle-switch" />
    </label>
  </div>
   
  )
}

export default ToggleButton