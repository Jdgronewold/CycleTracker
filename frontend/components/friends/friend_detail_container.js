import { connect } from 'react-redux';
import FriendDetail from './friend_detail';
import { deleteFriend, fetchFriend, createFriend } from '../../actions/friend_actions';

const mapStateToProps = ({ friendDetail }) => ({
  friendDetail
});

const mapDispatchToProps = dispatch => ({
  deleteFriend: (id) => dispatch(deleteFriend(id)),
  fetchFriend: (id) => dispatch(fetchFriend(id)),
  createFriend: (friend) => dispatch(createFriend(friend))
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendDetail);
