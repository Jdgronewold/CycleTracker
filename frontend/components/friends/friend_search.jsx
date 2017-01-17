import React from 'react';
import { Link } from 'react-router';

class FriendSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
    this.handleQuery = this.handleQuery.bind(this);
  }

  componentDidMount() {
    debugger
    this.props.fetchCertainFriends(this.state.query);
  }

  handleQuery(e) {
    debugger
    this.setState({ query: e.currentTarget.value });
    this.props.fetchCertainFriends(this.state.query);
  }

  render() {
    if(typeof this.props.friends === "undefined") {
      return (
        <div></div>
      );
    } else {
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

      return(
        <div>
          <form>
            <input
              type="text"
              value={this.state.query}
              onChange={this.handleQuery}
              placeholder="Search for a Biker"
              />
            <button onClick={this.handleQuery}> Search </button>
          </form>
          <div>
            { indexItems }
          </div>
        </div>
      );

    }

  }

}

export default FriendSearch;
