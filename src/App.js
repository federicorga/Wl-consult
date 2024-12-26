
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Pdf from './pages/Pdf';
import WebRoutes from './components/WebRoutes/WebRoutes';



function App() {


  return (
   <>
   <Router>
    
    <Routes>
    <Route path='/servicios-pdf' element={<Pdf />} />
    <Route path='/*' element={<WebRoutes></WebRoutes>}/>
  
    </Routes>
  

   </Router>
   
   </>
  );
}

export default App;
