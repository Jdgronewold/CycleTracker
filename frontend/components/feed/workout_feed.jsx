import React from 'react';
import StaticMap from '../hikes/static_map';
import { Link } from 'react-router';
import FeedComments from './feed_comments';

const WorkoutFeed = ({activity, createComment, deleteComment}) => (
  <div className="feed-workout">
    <div className="feed-title" >
      <span>
        {activity.username} worked
        out on {activity.date}!
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
            <b>Summary: </b> {activity.username} completed
              the {activity.name} workout
            </li>
            <li> <b>Distance: </b> {activity.distance} miles</li>
            <li> <b>Time: </b> {activity.time} </li>
          </ul>
      </div>
    </div>
    <div className="feed-comments">
      <FeedComments
        comments={activity.comments}
        create={createComment}
        delete={deleteComment}
        type="workout"
        activityId={activity.id}
        />
    </div>
  </div>
);

export default WorkoutFeed;
