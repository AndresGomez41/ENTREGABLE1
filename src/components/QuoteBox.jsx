import React, { useState } from "react";
import { createPortal } from "react-dom";
import quotes from "../quotes.json";

const QuoteBox = ({ color, index }) => {
  return (
    <div className="quoteBox">
      <div>
        <p style={{ color: color }}>
          <i className="fa-solid fa-quote-left" style={{ color: color }}></i>
          {quotes[index].quote}
        </p>
      </div>
      <h3 style={{ color: color }}> {quotes[index].author}</h3>
    </div>
  );
};

export default QuoteBox;
