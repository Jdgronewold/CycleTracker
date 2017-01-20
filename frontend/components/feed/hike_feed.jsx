import React from 'react';
import StaticMap from '../hikes/static_map';
import { Link } from 'react-router';
import FeedComments from './feed_comments';


const HikeFeed = ({activity, createComment, deleteComment}) => (
  <div className="feed-hike">
    <div className="feed-title">
      <span> {activity.username} created a new route!</span>
    </div>
    <div className="feed-route-content">
      <div className="feed-static-image">
        <Link to={`routes/${activity.id}`}>
          <StaticMap hikePath={activity.routePath} />
        </Link>
      </div>
      <div className="feed-route-data">
        <ul>
          <li> <b>Title: </b> {activity.title} </li>
          <li> <b>Distance: </b> {activity.distance} miles</li>
        </ul>
      </div>
    </div>
    <div className="feed-comments">
      <FeedComments
        comments={activity.comments}
        create={createComment}
        delete={deleteComment}
        type="hike"
        activityId={activity.id}
        />
    </div>
  </div>
);

export default HikeFeed;
