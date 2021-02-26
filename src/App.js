import './App.css';
import HomePage from './HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="app">

    <Router>
        <Switch>

        <Route path="/about">
        <h1>about page</h1>
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
