import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Product from './components/Product';
import Admin from './components/Admin';
import ProductAll from './components/ProductAll';
import Styled from './components/Styled';
import Context from './components/Context';
import Ref from './components/Ref';
import Demo from './components/Demo';

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <a href='/product'>product</a>
      <BrowserRouter>

        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/admin">Admin</Link>
        
        <Routes>
          <Route path='*' element={<h1>Four Oh Four!</h1>} />
          <Route path='/about' element={<About />} />
          
          <Route path='/admin' element={<Admin />} />
          <Route path='/' element={<Styled />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<ProductAll />} />
          <Route path='/context' element={<Context />} />
          <Route path='/ref' element={<Ref />} />
          <Route path='/demo' element={<Demo />} />
        </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
