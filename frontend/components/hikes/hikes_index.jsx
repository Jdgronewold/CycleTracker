import React from 'react';
import StaticMap from './static_map.jsx';
import { Link } from 'react-router';

class HikeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchHikes();
  }

  render() {

    const hikes = Object.keys(this.props.hikes).map( id => this.props.hikes[id]);
    debugger
    const indexItems = hikes.map( (hike, idx) => {
      debugger
      return (
        <Link to={`/hikes/${hike.id}`} key={idx}>
          <li>
            <StaticMap hikePath={this.props.hikes[ hike.id ].routePath} />
            <div className="static-overlay">{this.props.hikes[ hike.id ].title}</div>
          </li>
        </Link>
      );
    });


    return (
      <div>
        <h2>My Routes</h2>
        <div className="index-container">
          <ul className="index-ul">
            { indexItems }
          </ul>
        </div>
      </div>
    );
  }
}

export default HikeIndex;
