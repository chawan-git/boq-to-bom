import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, Switch } from "react-router";
import HomePage from "./components/HomePage";
import SignInComponent from './components/SignInComponent';
import ManagementHomeComponent from './components/ManagementHomeComponent';
import UnauthorizedComponent from './components/UnauthorizedComponent';
import SignOutComponent from './components/SignOutComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="sky">
      <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/signin" component={SignInComponent} />
          <Route path="/management" component={ManagementHomeComponent} />
          <Route path="/unauthorized" component={UnauthorizedComponent} />
          <Route path="/signout" component={SignOutComponent} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
