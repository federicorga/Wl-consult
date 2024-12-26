import './SectionFAQ.css'
import PortadaSections from '../PortadaSections/PortadaSections';
import FAQLIST from './FAQ/FAQLIST';
import faqData from '../../assets/FAQData';
import Subtitleh2 from '../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2';
import LineSepar from '../ComponentesAccesorios/LineSepar/LineSepar';



function SectionFAQ() {

  return (
    <>
      <PortadaSections titlePortada={"FAQ"} imagen={"https://www.shutterstock.com/image-photo/labor-law-lawyer-attorney-legal-600nw-1350699089.jpg"}/>
<section className='SectionFAQLIST'>
<div className='Titleh2-FaQ-Section'>
  <Subtitleh2 text={"PREGUNTAS FRECUENTES"}/>
  <LineSepar></LineSepar>
  </div>
      <FAQLIST faqData={faqData} />;
      </section>
    </>
  );
}







export default SectionFAQ;
