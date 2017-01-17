import { connect } from 'react-redux';
import FriendSearch from './friend_search';
import { fetchCertainFriends, createFriend } from '../../actions/friend_actions';

const mapStateToProps = ({ friendSearch }) => ({
  friendSearch
});

const mapDispatchToProps = dispatch => ({
  fetchCertainFriends: (query) => dispatch(fetchCertainFriends(query)),
  createFriend: (friend) => dispatch(createFriend(friend))
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendSearch);
