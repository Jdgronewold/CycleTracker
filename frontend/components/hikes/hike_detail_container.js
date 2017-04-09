import { connect } from 'react-redux';
import HikeDetail from './hike_detail';
import { fetchHike, deleteHike } from '../../actions/hike_actions';

const mapStateToProps = ({ hikeDetail, session }) => ({
  hikeDetail,
  session: session.currentUser ? session : {}
});

const mapDispatchToProps = dispatch => ({
  fetchHike: (id) => dispatch(fetchHike(id)),
  deleteHike: (id) => dispatch(deleteHike(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HikeDetail);
