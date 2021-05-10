

import { Route, Switch } from 'react-router';
import './App.css';
import AnimeDetails from './components/AnimeDetails/AnimeDetails';

import Home from './components/Home/Home';



function App() {
  
  return (
    <div>
     <Switch>
     <Route path="/" component={Home} exact/>
     <Route path="/anime/:mal_id" component={AnimeDetails}/>
     </Switch>
     
    </div>
  )
}

export default App
