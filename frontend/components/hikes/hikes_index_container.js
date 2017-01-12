import { connect } from 'react-redux';
import HikeIndex from './hikes_index';
import { fetchHikes, fetchHike,
  createHike, updateHike, deleteHike } from '../../actions/hike_actions';


const mapStateToProps = ({ hikes }) => ({
  hikes
});

const mapDispatchToProps = dispatch => ({
  fetchHikes: () => dispatch(fetchHikes()),
  fetchHike: (id) => dispatch(fetchHike(id)),
  createHike: (hike) => dispatch(createHike(hike)),
  updateHike: (hike) => dispatch(updateHike(hike)),
  deleteHike: (id) => dispatch(deleteHike(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HikeIndex);
