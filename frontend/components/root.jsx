import { Router, Route, IndexRoute, hashHistory, withRouter, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';
import * as onEnterHooks from '../utils/on_enter_hooks';



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
import ActivityFeedContainer from './feed/feed_container';
import SplashHome from './splash/splash_home';
import Home from './home/home';


const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="welcome"/>
          <Route path="welcome" component={SplashContainer} onEnter={onEnterHooks._redirectIfLoggedIn(store)}>
            <IndexRedirect to='home'/>
            <Route path="home" component={SplashHome} />
            <Route path="login"
              component={ LoginFormContainer }
              onEnter={onEnterHooks._redirectIfLoggedIn(store)}/>
            <Route path="signup"
              component={ SignupFormContainer }
              onEnter={onEnterHooks._redirectIfLoggedIn(store)}/>
          </Route>

          <Route
            path="home"
            component={Home}
            onEnter={onEnterHooks._redirectIfNotLoggedIn(store)}>
            <IndexRedirect to='feed' />
            <Route
              path="feed"
              component={ActivityFeedContainer}
              onEnter={onEnterHooks._activityFeed(store.dispatch)}/>
            <Route
              path="dashboard"
              component={WorkoutIndexContainer}
              onEnter={onEnterHooks._workoutIndex(store, store.dispatch)}>
              <Route path="create" component={WorkoutFormContainer}  />
              <Route
                path=":id"
                component={WorkoutDetailContainer}
                onEnter={onEnterHooks._workoutDetail(store.dispatch)} />
            </Route>
          </Route>

          <Route
            path="routes"
            component={HikeIndexContainer}
            onEnter={onEnterHooks._hikeIndex(store, store.dispatch)}>
            <Route path="create" component={HikeFormContainer}  />
            <Route
              path=":id"
              component={HikeDetailContainer}
              onEnter={onEnterHooks._hikeDetail(store.dispatch)}/>
          </Route>

          <Route
            path="workouts"
            component={WorkoutIndexContainer}
            onEnter={onEnterHooks._workoutIndex(store, store.dispatch)}>
            <Route path="create" component={WorkoutFormContainer}  />
            <Route
              path=":id"
              component={WorkoutDetailContainer}
              onEnter={onEnterHooks._workoutDetail(store.dispatch)} />
          </Route>

          <Route
            path="friends"
            component={FriendIndexContainer}
            onEnter={onEnterHooks._friendIndex(store, store.dispatch)}>
            <Route path="search" component={FriendSearchContainer} />
            <Route
              path=":id"
              component={FriendDetailContainer}
              onEnter={onEnterHooks._friendDetail(store.dispatch)} />
          </Route>

        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
