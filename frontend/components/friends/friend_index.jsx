import React from 'react';
import { withRouter, Link } from 'react-router';

class FriendIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleFriend = this.handleFriend.bind(this);
  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  handleFriend(e) {
    e.preventDefault();
    this.props.router.push("friends/search");
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
          <button onClick={this.handleFriend}> Find Friends</button>
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

export default withRouter(FriendIndex);
