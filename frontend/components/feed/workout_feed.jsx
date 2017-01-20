import React from 'react';
import StaticMap from '../hikes/static_map';
import { Link } from 'react-router';

const WorkoutFeed = ({activity}) => (
  <div className="feed-workout">
    <div className="feed-title" >
      <span>
        {activity.username} worked
        out on {activity.date}!
      </span>
    </div>
    <div className="feed-route-content">
      <div className="feed-static-image">
        <Link to={`hikes/${activity.id}`}>
          <StaticMap hikePath={activity.routePath} />
        </Link>
      </div>
      <div className="feed-route-data">
        <ul>
          <li>
            <b>Summary: </b> {activity.username} completed
              the {activity.name} workout
            </li>
            <li> <b>Distance: </b> {activity.distance} </li>
            <li> <b>Time: </b> {activity.time} </li>
          </ul>
      </div>
    </div>
  </div>
);

export default WorkoutFeed;
