import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, role, ...rest }) => {
  const { user } = useSelector(state => state.user);
  return (
    <Route {...rest} render={props => (
      user && user.role === role
        ? <Component {...props} />
        : <Redirect to="/login" />
    )} />
  );
};

export default PrivateRoute;
