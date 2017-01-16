import React from 'react';
import { Link } from 'react-router';

class FriendIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    const friends = Object.keys(this.props.friends).map( friendId => {
      return this.props.friends[friendId];
    });

    const indexItems = friends.map( (friend, idx) => {
      return (
        <Link to={`friends/${friend.id}`} key={idx}>
          <li>
            <img src={friend.picture}></img>
            <span>{friend.username}</span>
          </li>
        </Link>
      );
    });

    return (
      <div>
        <ul>
          {indexItems}
        </ul>
      </div>
    );
  }
}

export default FriendIndex;
