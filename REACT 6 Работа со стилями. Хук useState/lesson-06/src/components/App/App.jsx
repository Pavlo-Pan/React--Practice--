import Button from '../Button/Button'
import Menu from '../Menu/Menu';
import ToggleButton from '../ToggleButton/ToggleButton';


import '../../styles/style.css';

function App() {


  return (
    <>
      <ToggleButton>Click</ToggleButton>
      <Menu />
      <Button variant="contained">Contained button</Button>
      <Button variant="outlined">Outlined button</Button>
    </>
  )
}

export default App
