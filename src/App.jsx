
import React, { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox'
import Button from './components/button';
import quotes from "./quotes.json";

function App() {

  let randomIndex = Math.floor(Math.random() * quotes.length);
  let hue = Math.floor(Math.random() * 36) * 10;
  let bgColor = `hsl(${hue},50%,50%)`;
  const [index, setIndex] = useState(randomIndex)
  const [color, setColor] = useState(bgColor)
 
  const changeQuote = () => {
    while (index === randomIndex) {
      randomIndex = Math.floor(Math.random() * quotes.length);
    }
    while (bgColor === color) {
      hue = Math.floor(Math.random() * 36) * 10;
      bgColor = `hsl(${hue},50%,50%)`;
    }
    setIndex(randomIndex);
    setColor(bgColor);
  }

  return (
    <>
      <div className="main"  style={{ backgroundColor: color}}>
        <div className='card'>
          <QuoteBox color={color} index={index}/>      
          <Button color={color} changeQuote={changeQuote}/>
        </div>
      </div>
    </>
  )
}

export default App
