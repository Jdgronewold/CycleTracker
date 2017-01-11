import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, login } from '../../../actions/session_actions';


const mapStateToProps = ({session}) => ({
  loggedIn: (session.currentUser === null ? true : false),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    signup: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
