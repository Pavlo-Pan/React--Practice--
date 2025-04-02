import ToggleText from '../ToggleText/ToggleText'

import './App.css'

function App() {
  const text = "Это скрываемый текст. Нажмите кнопку, чтобы скрыть или показать его";

  return (
    <>
      <ToggleText text={text}/>
    </>
  )
}

export default App
