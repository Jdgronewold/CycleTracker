import { Router, Route, IndexRoute, hashHistory, withRouter, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';

import App from './app';
import SignupFormContainer from './session/signup/signup_form_container';
import LoginFormContainer from './session/login/login_form_container';
import SplashContainer from './splash/splash_container';
import HikeIndexContainer from './hikes/hikes_index_container';
import HikeDetailContainer from './hikes/hike_detail_container';
import HikeFormContainer from './hikes/hike_form_container';
import WorkoutIndexContainer from './workouts/workouts_index_container';
import WorkoutDetailContainer from './workouts/workouts_detail_container';
import WorkoutFormContainer from './workouts/workouts_form_container';
import FriendIndexContainer from './friends/friends_index_container';
import FriendDetailContainer from './friends/friend_detail_container';
import FriendSearchContainer from './friends/friend_search_container';
import SplashHome from './splash/splash_home';
import Home from './home/home';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if(currentUser) {
      replace('home');
    }
  };

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if(currentUser === null) {
      replace('welcome');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="welcome"/>
          <Route path="welcome" component={SplashContainer} onEnter={_redirectIfLoggedIn}>
            <IndexRedirect to='home'/>
            <Route path="home" component={SplashHome} />
            <Route path="login"
              component={ LoginFormContainer }
              onEnter={_redirectIfLoggedIn}/>
            <Route path="signup"
              component={ SignupFormContainer }
              onEnter={_redirectIfLoggedIn}/>
          </Route>

          <Route path="home" component={Home} onEnter={_redirectIfNotLoggedIn} />

          <Route path="hikes" component={HikeIndexContainer} onEnter={_redirectIfNotLoggedIn}>
            <Route path="create" component={HikeFormContainer} />
            <Route path=":id" component={HikeDetailContainer} />
          </Route>

          <Route path="workouts" component={WorkoutIndexContainer} onEnter={_redirectIfNotLoggedIn}>
            <Route path="create" component={WorkoutFormContainer} />
            <Route path=":id" component={WorkoutDetailContainer} />
          </Route>

          <Route path="friends" component={FriendIndexContainer} onEnter={_redirectIfNotLoggedIn}>
            <Route path="search" component={FriendSearchContainer} />
            <Route path=":id" component={FriendDetailContainer} />
          </Route>

        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
