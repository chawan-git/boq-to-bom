import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, Switch } from "react-router";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Provider store={store}>
      <div>
      <Switch>
          <Route path="/" component={HomePage} exact />
          
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
