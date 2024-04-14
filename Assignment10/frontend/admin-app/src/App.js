import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import EmployeePage from './pages/EmployeePage';
import LoginPage from '../pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/admin" component={AdminPage} role="admin" />
          <PrivateRoute path="/employee" component={EmployeePage} role="employee" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
