
import './App.css';
import Home from './mainComponents/Home.js';
import Shop from './mainComponents/Shop.js';
import Blog from './mainComponents/Blog.js';
import About from './mainComponents/About.js';
import Contact from './mainComponents/Contact.js';
import Cart from './mainComponents/Cart.js';
import NoPage from './mainComponents/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>

  );
}

export default App;
