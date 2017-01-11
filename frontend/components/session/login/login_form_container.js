import { connect } from 'react-redux';
import LoginForm from './login_form';
import { signup, login } from '../../../actions/session_actions';


const mapStateToProps = ({session, errors}) => ({
  loggedIn: (session.currentUser === null ? true : false),
  errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user))

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
