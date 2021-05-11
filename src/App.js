

import { Route, Switch } from 'react-router';
import './index.css';
import AnimeDetails from './components/AnimeDetails/AnimeDetails';

import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites';
import { GlobalProvider } from './components/Context/Globalcontext';




function App() {
  
  return (
    <div>
      <GlobalProvider>
        
     <Switch>
     <Route path="/" component={Home} exact/>
     <Route path="/anime/:mal_id" component={AnimeDetails}/>
     <Route path="/favourites" component={Favorites} exact/>
     </Switch>
     </GlobalProvider>
    </div>
  )
}

export default App
