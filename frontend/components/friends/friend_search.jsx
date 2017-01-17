import React from 'react';
import { Link } from 'react-router';

class FriendSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
    this.handleQuery = this.handleQuery.bind(this);
  }

  componentDidMount() {
    // this.props.fetchCertainFriends(this.state.query);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.query !== this.state.query) {
      this.props.fetchCertainFriends(this.state.query);
    }
  }

  handleQuery(e) {
    this.setState({ query: e.currentTarget.value });
    // this.props.fetchCertainFriends(this.state.query);
  }

  render() {

    const friends = Object.keys(this.props.friendSearch).map( friendId => {
      return this.props.friendSearch[friendId];
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

    if (friends.length === 0) {
      return (
        <div className="friend-search-container">
          <form>
            <input
              type="text"
              value={this.state.query}
              onChange={this.handleQuery}
              placeholder="Search for a Biker"
              />
          </form>
          <span> Or, type &quot;all&quot; to see all users </span>
          <div className="friend-container">
            <ul>
              <li> No users match the search criteria </li>
            </ul>
          </div>

        </div>
      );
    }

    return(
      <div className="friend-search-container">
        <form>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleQuery}
            placeholder="Search for a Biker"
            />
        </form>
        <span> Or, type &quot;all&quot; to see all users </span>
        <div className="friend-container">
          <ul>
            { indexItems }
          </ul>
        </div>
      </div>
    );
    }


}

export default FriendSearch;
