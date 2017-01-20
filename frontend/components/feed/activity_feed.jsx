import React from 'react';
import HikeFeed from './hike_feed';
import WorkoutFeed from './workout_feed';

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // this.props.fetchActivities();
  }

  render() {
    const activities = Object.keys(this.props.activities).map( (activityId, idx) => {
      if(activityId.includes("hike")) {
        return (
          <HikeFeed
            key={idx}
            activity={this.props.activities[activityId]}
            createComment={this.props.createComment}
            deleteComment={this.props.deleteComment}
          />
        );
      } else {
        return (
          <WorkoutFeed
            key={idx}
            activity={this.props.activities[activityId]}
            createComment={this.props.createComment}
            deleteComment={this.props.deleteComment}
          />
        );
      }
    });

    return (
      <div className="activity-feed">
          { activities }
      </div>
    );
  }
}

export default ActivityFeed;
