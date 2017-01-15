import React from 'react';
import { hashHistory } from 'react-router';

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hikes = Object.keys(this.props.hikes).map(hikeId => {
      return this.props.hikes[hikeId];
    });

    const routeOptions = hikes.map( hike => (
      <option value={hike.id} >{hike.title}</option>
    ));
    return(
      <div>
        <h2> Create new workout </h2>
        <form>
          <div className="form-input-div">
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              />
          </div>
          <br />

          <div className="form-input-div">
            <label htmlFor="date">Date: </label>
            <input
              id="date"
              type="date"
              value={this.state.date}
              onChange={this.update("date")}
              />
          </div>
          <br />

          <div className="form-input-div">
            <label htmlFor="description">Description: </label>
            <textarea
              id="description"
              value={this.state.description}
              onChange={this.update("description")}>
            </textarea>
          </div>
          <br />

            <div className="form-input-div">
              <label htmlFor="distance">Distace: </label>
              <input
                id="distance"
                type="number"
                value={this.state.number}
                onChange={this.update("number")}
                />
            </div>
            <br />

            <div className="form-input-div">
              <label htmlFor="time">Time: </label>
              <input
                id="time"
                type="time"
                value={this.state.time}
                onChange={this.update("time")}
                />
            </div>
            <br />

            <div className="form-input-div">
              <label htmlFor="notes">Note: </label>
              <textarea
                id="notes"
                value={this.state.notes}
                onChange={this.update("notes")}>
              </textarea>
            </div>
            <br />

            <div className="form-input-div">
              <label htmlFor="route">Route: </label>
              <select value={this.state.route} onChange={this.update("route")}>

              </select>
            </div>
            <br />

        </form>
      </div>
    );
  }
}
