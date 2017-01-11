import { Router, Route, IndexRoute, hashHistory, withRouter, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';

import App from './app';
import SignupFormContainer from './session/signup/signup_form_container';
import LoginFormContainer from './session/login/login_form_container';
import SplashContainer from './splash/splash_container';
import Home from './home/home';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if(currentUser) {
      replace('home');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="welcome"/>
          <Route path="welcome" component={SplashContainer} onEnter={_redirectIfLoggedIn}>
            <Route path="login"
              component={ LoginFormContainer }
              onEnter={_redirectIfLoggedIn}/>
            <Route path="signup"
              component={ SignupFormContainer }
              onEnter={_redirectIfLoggedIn}/>
          </Route>

          <Route path="home" component={Home} />

        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
