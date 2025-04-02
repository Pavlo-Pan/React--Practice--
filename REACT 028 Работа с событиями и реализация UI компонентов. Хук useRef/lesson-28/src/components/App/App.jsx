import Users from '../Users/Users';
import Timer from '../Timer/Timer';
import ScrolableText from '../ScrolableText/ScrolableText';
import CollapseItem from '../CollapseItem/CollapseItem';

import mainText from "../../data/mainText";

import '../../styles/style.css';

function App() {


  return (
    <>
      {/* <Users /> */}
      <Timer />
      <CollapseItem title="Title" content={"content"} />
      <ScrolableText items={mainText} />
    </>
  )
}

export default App
