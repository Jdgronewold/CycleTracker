import React from 'react';
import StaticMap from '../hikes/static_map';
import { hashHistory } from 'react-router';

class FriendDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFriend = this.handleFriend.bind(this);
  }

  componentDidMount() {
    this.props.fetchFriend(this.props.params.id);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteFriend(this.props.friendDetail.id)
      .then((res) => hashHistory.push("friends"));
  }

  handleFriend(e) {
    e.preventDefault();
    this.props.createFriend(this.props.friendDetail)
      .then((res) => hashHistory.push("friends"));
  }

  render() {
    if(typeof this.props.friendDetail.username === "undefined") {
      return (
        <div></div>
      );
    } else {
      let routes;
      let workouts;
      let button;

      if(this.props.friendDetail.routes.length === 0) {
        routes = <li>No Routes</li>;
        } else {
          routes = this.props.friendDetail.routes.map((route, idx) => (
            <li className="friend-route" key={idx}>
              <StaticMap hikePath={route.routePath} />
              <h5>{route.title}</h5>
            </li>
          ));
        }

        if(this.props.friendDetail.workouts.length === 0) {
          workouts = <li>No Workouts</li>;
          } else {
            workouts = this.props.friendDetail.workouts.map((workout, idx) => (
              <li className="friend-workout" key={idx}>
                <h5>{workout.name}</h5>
                <span key="description"> {workout.description}</span>
                <span key="date"> {workout.date}</span>
                <span key="time"> {workout.time}</span>
              </li>
            ));
          }

          if(this.props.friendDetail.friends) {
            button = <button onClick={this.handleDelete}> Delete Friend</button>;
          } else {
            button = <button onClick={this.handleFriend}> Add Friend</button>;
          }

          return (
            <div>
              <h2> { this.props.friendDetail.username } </h2>
              <br />
              { button }
              <br />
              <h3> {this.props.friendDetail.username}{`'`}s Routes </h3>
              <ul>
                { routes }
              </ul>
              <br />
              <h3> {this.props.friendDetail.username}{`'`}s Workouts </h3>
              <ul>
                { workouts }
              </ul>
            </div>

          );
    }
  }


}

export default FriendDetail;
