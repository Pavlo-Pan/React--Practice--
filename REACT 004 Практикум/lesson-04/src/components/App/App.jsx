
import PokemonList from '../PokemonList/PokemonList';
import MoviesDisplay from '../MoviesDisplay/MoviesDisplay';
import TravelCard from '../TravelCard/TravelCard';
import TrainRoutesList from '../TrainRoutesList/TrainRoutesList';
import Menu from '../Menu/Menu';

import pokemons from '../../data/pokemons';
import movies from '../../data/movies';
import travels from '../../data/travels';
import routes from '../../data/routes';
import menuItems from '../../data/menuItems';

import './App.css'



function App() {

  const travelElements = travels.map(item => <TravelCard key={item.id} {...item} />)

  return (
    <>
      <Menu items={menuItems} />
      <TrainRoutesList items={routes} />
      <div className='travel-elements'>{travelElements}</div>
      <MoviesDisplay items={movies} />
      <PokemonList items={pokemons} />

    </>
  )
}

export default App
