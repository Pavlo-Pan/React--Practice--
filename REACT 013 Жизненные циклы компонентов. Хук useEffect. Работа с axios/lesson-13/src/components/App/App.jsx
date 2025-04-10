import { useState } from 'react';
import axios from "axios";

import ByList from '../ByList/ByList';
import TodoList from '../TodoList/TodoList';
import Timer from '../Timer/Timer';

import './App.css'

function App() {

  const [showTimer, setShowTimer] = useState(false);

  const toggleTimer = ()=> setShowTimer(prevState => !prevState);

  return (
    <>
    <button onClick={toggleTimer}>{showTimer ? "Спрятать таймер" : "Показать таймер"} </button>
    {showTimer && <Timer />}
      <ByList />
      <TodoList />
    </>
  )
}

export default App
