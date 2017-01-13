import { connect } from 'react-redux';
import HikeForm from './hike_form';
import { createHike } from '../../actions/hike_actions';

const mapDispatchToProps = dispatch => ({
  createHike: (hike) => dispatch(createHike(hike))
});

export default connect(null, mapDispatchToProps)(HikeForm);
