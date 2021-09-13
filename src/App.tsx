import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './Components/Home';

const App : React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Redirect to="/home" />
            )
          }} />
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
