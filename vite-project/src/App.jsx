import { useState } from 'react'
import './App.css'
// import React from 'react'
import MySVG from '/Users/oliveralvarado/projects/week4-5/react-mute-button/icons/on.svg';
import SVG from '/Users/oliveralvarado/projects/week4-5/react-mute-button/icons/off.svg';


function App() {

  let off = SVG
  let on = MySVG
  const [mute, setMute] = useState(MySVG)
  const clicker = (event) => {
    event.preventDefault()
      if (mute === on) {
        setMute(off)
      } else {
        setMute(on)
      }
    }

  return (
    <>

    <h1>This is working</h1>
    <img href=''onClick={(event) => clicker(event)} src={mute} alt="My SVG" />
    </>
  )
}

export default App
