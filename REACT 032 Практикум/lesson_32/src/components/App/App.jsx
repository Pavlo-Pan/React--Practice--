import { Routes, Route } from 'react-router-dom'

import MainMenu from '../MainMenu/MainMenu'
import HomePage from '../../page/HomePage/HomePage'
import ProductsPage from '../../page/ProductsPage/ProductsPage'
import CartPage from '../../page/CartPage/CartPage'

import './App.css'

function App() {
 
  return (
    <>
      <MainMenu />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/products' element={<ProductsPage />}/>
        <Route path='/cart' element={<CartPage />}/>
      </Routes>
    </>
  )
}

export default App
