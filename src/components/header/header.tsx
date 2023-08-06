import React, { useState } from 'react'
import ReactSwitch from 'react-switch';
import "./header.css"
import {BsToggleOff, BsToggleOn} from "react-icons/bs"

function Navbar() {
  const [checked, setChecked] = useState(false);

  function handleChange() {
    setChecked(!checked)
  }

  return (
    <div>
      <div className="nav_bar" />
      <div className="code" onClick={handleChange}>
        {checked ? <BsToggleOn /> : <BsToggleOff />}
        <div style={{whiteSpace: 'pre-wrap', cursor: "default"}}> Enable Code View</div>
      </div>
    </div>
  )
}
export default Navbar