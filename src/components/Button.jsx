import React from 'react';
import App from '../App';


const  Button = ({color, changeQuote}) => {
    
    return (
        <div>
           <button 
          style={{ background: color} }
          onClick={changeQuote}
        >
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default Button;