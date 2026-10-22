//function base component

import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import Header from "./Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//react component i will contain js html and css 3no chijay 
function App(){


  return(
    <>
    <BrowserRouter> 
    <Header />
    <Routes>
    
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
     
    </>
  
 )
}
export default App;