

import { Route, Switch } from 'react-router';
import './index.css';
import AnimeDetails from './components/AnimeDetails/AnimeDetails';

import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites';
import { GlobalProvider } from './components/Context/Globalcontext';
import Header from './components/Header/Header';
import Upcoming from './components/upcoming anime/Upcoming';
import Topmanga from './components/Popularmanga/Topmanga';




function App() {
  
  return (
    <div>
      <GlobalProvider>
        <Header />
     <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/anime/:mal_id" component={AnimeDetails}/>
     <Route exact path="/favourites" component={Favorites} />
     <Route exact path="/upcoming" component={Upcoming} />
     <Route exact path="/bypopular" component={Topmanga}/>
     </Switch>
     </GlobalProvider>
    </div>
  )
}

export default App
