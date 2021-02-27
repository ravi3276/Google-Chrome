import './App.css';
import HomePage from './HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import {useStateValue} from "./StateProvider"
import SearchPage from './SearchPage';
function App() {

  // const [{term}]=useStateValue();
  return (
    <div className="app">

    <Router>
        <Switch>

        <Route path="/search">
        <SearchPage />
        </Route>

        <Route path="/">
        <HomePage />
        </Route>

        </Switch>
    </Router>
    
    </div>
  );
}

export default App;
