import { Routes, Route } from 'react-router-dom'

import HomePage from '../../pages/HomePage/HomePage';
import ProductsPage from '../../pages/ProductsPage/ProductsPage';
import ProductsFromPartnersPage from '../../pages/ProductsFromPartnersPage/ProductsFromPartnersPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';

import Menu from '../Menu/Menu'

import './App.css'

// import '../../styles/style.css'

function App() {
  

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/products-partners" element={<ProductsFromPartnersPage/>} />
        <Route path="/contacts" element={<ContactsPage/>} />
      </Routes>
    </>
  )
}

export default App
