
import UserContextProvider from '../../context/UserContextProvider'

import MainComponent from '../MainComponent/MainComponent'

import './App.css'

function App() {
 

  return (
    <UserContextProvider>
     <MainComponent />
    </UserContextProvider>
  )
}

export default App
