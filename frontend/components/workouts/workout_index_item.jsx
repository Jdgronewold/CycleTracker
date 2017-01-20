import React from 'react';
import StaticMap from '../hikes/static_map';
import { Link } from 'react-router';

const WorkoutIndexItem = ({activity}) => (
  <div className="feed-workout">
    <div className="feed-title" >
      <span>
        {activity.name}
      </span>
    </div>
    <div className="feed-route-content">
      <div className="feed-static-image">
        <Link to={`home/dashboard/${activity.id}`}>
          <StaticMap hikePath={activity.routePath} />
        </Link>
      </div>
      <div className="feed-route-data">
        <ul>
          <li>
            <b>Description: </b> {activity.description}
            </li>
            <li> <b>Distance: </b> {activity.distance} </li>
            <li> <b>Time: </b> {activity.time} </li>
            <li> <b>Elevation: </b> {activity.elevation} </li>
          </ul>
      </div>
    </div>
  </div>
);

export default WorkoutIndexItem;
