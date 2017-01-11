import { Router, Route, IndexRoute, hashHistory, withRouter, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';

import App from './app';
import SessionFormContainer from './session/session_form_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if(currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="/welcome"/>

          <Route path="/welcome" component={Splash} onEnter={_redirectIfLoggedIn}>
            <Route path="login"
              component={ SessionFormContainer }
              onEnter={_redirectIfLoggedIn}/>
            <Route path="signup"
              component={ SessionFormContainer }
              onEnter={_redirectIfLoggedIn}/>
          </Route>

          <Route path="/home" component={Home} onEnter={_redirectIfNotLoggedIn}> ### does this trickle down?
            <IndexRedirect to="/feed" />
            <Route path="/feed" component={Feed}/>
            <Route path="/dashboard" component={Dashboard}/>
          </Route>

          <Route path="/friends" component={Friend} onEnter={_redirectIfNotLoggedIn}>
            <Route path="/my_friends" component={MyFriendContainer} />
            ###think about
            <Route path="/find_friends" component={FindFriendContainer} />
          </Route>

          <Route path="/hikes" component={Hike} onEnter={_redirectIfNotLoggedIn}>
            <Route path="hikes/:hikeId" component={MyHikeContainer} />
            <Route path="hikes/create" component={CreateHikeContainer} />
          </Route>

          <Route path="/trips" component={Hike} onEnter={_redirectIfNotLoggedIn}>
            <Route path="trips/:tripId" component={MyHikeContainer} />
            <Route path="trips/create" component={CreateTripContainer} />
          </Route>

        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
