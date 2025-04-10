
import ThemeProvider from '../../context/ThemeProvider';

import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import NotificationsCount from '../NotificationsCount/NotificationsCount';

import './App.css'

function App() {
  // const [theme, setTheme] = useState('light');

  // const toggleTheme = () => setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')

  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <Menu />
      <Button>Order</Button>
    </ThemeProvider>
  )
}

export default App
