import React from 'react';

import './FAQ.css'

const FAQ = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="faq-item">
      <div className="faq-question" onClick={onToggle}>
        <h2>{question}</h2>
      </div>
      {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  );
};



// Uso del componente FaqList


export default FAQ;
