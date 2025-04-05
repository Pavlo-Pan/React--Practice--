import BlogSettingsProvider from '../../context/BlogSettingsProvider';

import Article from '../Article/Article';
import SettingsPanel from '../SettingsPanel/SettingsPanel';

import './App.css';

const articleData = [
  'First Artikle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, ipsa',
  'Second Artikle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, ipsa',
  'Third Artikle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, ipsa',
]

function App() {

  return (
    <BlogSettingsProvider>

      <SettingsPanel />
      <Article data={articleData} />

    </BlogSettingsProvider>
  )
}

export default App
