import FAQ from "./FAQ";
import { useState } from "react";

const FAQLIST = ({ faqData }) => {
    const [openItems, setOpenItems] = useState([]);
  
    const handleToggle = (index) => {
      if (openItems.includes(index)) {
        setOpenItems(openItems.filter((item) => item !== index));
      } else {
        setOpenItems([...openItems, index]);
      }
    };
  
    return (
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <FAQ
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openItems.includes(index)}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    );
  };

  export default FAQLIST;