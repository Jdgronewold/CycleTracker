import { connect } from 'react-redux';
import ActivityFeed from './activity_feed';
import { fetchActivities } from '../../actions/hike_actions';

const mapStateToProps = ({ activities }) => ({
  activities
});

const mapDispatchToProps = dispatch => ({
  fetchActivities: () => dispatch(fetchActivities())
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityFeed);
