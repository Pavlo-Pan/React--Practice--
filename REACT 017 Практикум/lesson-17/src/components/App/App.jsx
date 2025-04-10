
import TodosProvider from '../../context/TodosProvider';

import TodoList from '../TodoList/TodoList';

import './App.css'

function App() {


  return (
    <>
      <TodosProvider>
        <TodoList />
      </TodosProvider>

    </>
  )
}

export default App
