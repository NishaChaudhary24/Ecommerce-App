import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Gridcard from './Gridcard';
import Table from './Table';
// import Header from './Component/Header';
// import Footer from './Component/Footer';
// import Layout from './Component/Layout';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';


function App() {
  return (
     <>
 <Router>
      <Routes>
        <Route path="/" element={<Home/>} />    
        <Route path="/gridcard" element={<Gridcard />} />
        <Route path="/tableview" element={<Table />} /> 
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={< Contact />} />
      </Routes>
    </Router> 

    {/* <Contact/> */}
       
     </>
  );
}

export default App;
