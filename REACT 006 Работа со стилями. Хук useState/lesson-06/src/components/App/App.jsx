import Button from '../Button/Button'
import Menu from '../Menu/Menu';
import ToggleButton from '../ToggleButton/ToggleButton';
import Footer from '../Footer/Footer';
import ByList from '../ByList/ByList';
import Calculate from '../Calculate/Calculate';
import ShowTextButton from '../ShowTextButton/ShowTextButton';


import '../../styles/style.css';

function App() {


  return (
    <>
      <ToggleButton>Click me</ToggleButton>
      <Menu />
      <Calculate initialValue={1} />
      <Button variant="contained">Contained button</Button>
      <Button variant="outlined">Outlined button</Button>
      <ByList />
      <ShowTextButton firstText="Show" secondText="Hide" nextText="Next text" />
      <Footer />
    </>
  )
}

export default App
