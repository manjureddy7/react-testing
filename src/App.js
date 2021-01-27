import Header from './components/Header';
import UserInput from './components/UserInput';
import ListItems from './components/ListItems';
import User from './components/User';
import LocationDisplay from './components/LoactionDisplay';
import { Link, Switch, Route, BrowserRouter } from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>
      <Link to="/user">User</Link>
      <Link to="/">Header</Link>
      <Link to="/listitems">Items</Link>
      <Link to="/userinput">User Input</Link>
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/userinput">
          <UserInput />
        </Route>
        <Route path="/listitems">
          <ListItems />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route>
          <h1>No Match Found</h1>
        </Route>
      </Switch>
      <LocationDisplay />
    </BrowserRouter>
    </>
  );
}

export default App;
