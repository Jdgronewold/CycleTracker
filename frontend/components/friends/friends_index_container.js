import { connect } from 'react-redux';
import FriendIndex from './friend_index';
import { createFriend, fetchFriends } from '../../actions/friend_actions';

const mapStateToProps = ({ friends }) => ({
  friends
});

const mapDispatchToProps = dispatch => ({
  fetchFriends: () => dispatch(fetchFriends()),
  createFriend: (friend_join) => dispatch(createFriend(friend_join))
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendIndex);
