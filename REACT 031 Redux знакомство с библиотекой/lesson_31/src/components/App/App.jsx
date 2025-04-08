import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import HomePage from '../../pages/HomePage/HomePage';
import BuyListPage from '../../pages/BuyListPage/BuyListPage';
import UrgencyBuyListPage from '../../pages/UrgencyBuyListPage/UrgencyBuyListPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';

import BuyList from '../BuyList/BuyList'

import './App.css'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buy-list" element={<BuyListPage />} />
        <Route path="/urgency-buy-list" element={<UrgencyBuyListPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  )
}

export default App
