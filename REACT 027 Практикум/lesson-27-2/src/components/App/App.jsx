import { Routes, Route } from 'react-router-dom'

import NavMenu from '../NavMenu/NavMenu'
import HomePage from '../../pages/HomePage/HomePage'
import UsersPage from '../../pages/UsersPage/UsersPage'
import UserProfilePage from '../../pages/UserProfilePage/UserProfilePage'

import './App.css'

function App() {
  

  return (
    <>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/users" element={<UsersPage/>}/>
        <Route path="/users/:id" element={<UserProfilePage />}/>
      </Routes>
    </>
  )
}

export default App
