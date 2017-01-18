import React from 'react';
import { Link } from 'react-router';
import StaticMap from '../hikes/static_map';

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchActivities();
  }

  render() {
    const activities = Object.keys(this.props.activities).map( (activityId, idx) => {
      if(activityId.includes("hike")) {
        return (
          <li key={idx}>
            <Link to={`hikes/${this.props.activities[activityId].id}`}>
              <StaticMap hikePath={this.props.activities[activityId].routePath} />
              <span key="username"> {this.props.activities[activityId].username} </span>
              <span key="title"> {this.props.activities[activityId].title} </span>
              <span key="distance"> {this.props.activities[activityId].distance} </span>
            </Link>
          </li>
        );
      } else {
        return (
          <li key={idx}>
            <Link to={`workouts/${this.props.activities[activityId].id}`}>
              <span key="username"> {this.props.activities[activityId].username} </span>
              <span key="name"> {this.props.activities[activityId].name} </span>
              <span key="date"> {this.props.activities[activityId].date} </span>
              <span key="description"> {this.props.activities[activityId].description} </span>
            </Link>
          </li>
        );
      }
    });

    return (
      <div>
        <ul>
          { activities }
        </ul>
      </div>
    );
  }
}

export default ActivityFeed;
