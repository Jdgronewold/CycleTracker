import { connect } from 'react-redux';
import HikeForm from './hike_form';
import { createHike } from '../../actions/hike_actions';

const mapStateToProps = ({ session }) => ({
    userZipcode: session.currentUser.zipcode
});

const mapDispatchToProps = dispatch => ({
  createHike: (hike) => dispatch(createHike(hike))
});

export default connect(mapStateToProps, mapDispatchToProps)(HikeForm);
