import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Nav";
import Home from './Home';
import Footer from './Footer';
import Shop from './Shop';
import Blog from './Blog';
import Contact from './Contact';
import About from './About';
import Checkout from './Checkout';
import Bill from './Bill';
import Thankyou from './Thankyou';


function App() {
  

  return (
    <>
     <BrowserRouter>
    <Nav/>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/bill" element={<Bill/>}></Route>
        <Route path="/thankyou" element={<Thankyou/>}></Route>
      </Routes>

      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
