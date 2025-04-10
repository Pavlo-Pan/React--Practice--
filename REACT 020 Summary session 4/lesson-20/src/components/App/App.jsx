
import Tabs from '../Tabs/Tabs';
import User from '../User/User';

import tabItems from '../../data/tabsItems';

import './App.css'

function App() {

  return (
    <>
      <User />
      <Tabs items={tabItems} />
    </>
  )
}

export default App
