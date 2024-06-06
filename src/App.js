import About from './About';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
    <Navbar title="TextUtils" about="About Us"/>
    <Routes>
    <Route path='/about' element={<About/>} />
    <Route path='/' element={<TextForm heading="Enter Your Text Below"/>} />
    <Route path='/contact' element={<div>Contact Us</div>} />
    </Routes>
    </BrowserRouter>
    );
  }
  
  export default App;
  
  
  
  