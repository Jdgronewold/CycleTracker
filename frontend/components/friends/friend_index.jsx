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

    if(this.props.children === null) {
      return(
        <div className="friend-container">
          <h3> My Friends </h3>
          <ul>
            {indexItems}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="friend-detail">
          {this.props.children}
        </div>
      );
    }
  }
}

export default FriendIndex;
