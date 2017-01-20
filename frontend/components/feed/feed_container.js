import { connect } from 'react-redux';
import ActivityFeed from './activity_feed';
import { fetchActivities } from '../../actions/hike_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';


const mapStateToProps = ({ activities }) => ({
  activities
});

const mapDispatchToProps = dispatch => ({
  fetchActivities: () => dispatch(fetchActivities()),
  createComment: (comment, activity) =>  dispatch(createComment(comment, activity)),
  deleteComment: (id, activity) => dispatch(deleteComment(id, activity))
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityFeed);
