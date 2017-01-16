import React from 'react';
import { hashHistory } from 'react-router';
import StaticMap from '../hikes/static_map';

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      notes: "",
      distance: 0,
      time: "00:00:00",
      date: "",
      routeId: 0
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchHikes();
  }

  update(property) {
    debugger
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }

  handleSubmit() {
    const workout = this.state;
    debugger
    this.props.createWorkout(workout)
    .then((result) => {
      hashHistory.push(`/hikes/${result.workout.id}`);
    });
  }

  renderMap() {
    debugger
    if(this.state.routeId !== 0) {
      const hike = this.props.hikes[this.state.routeId];
      debugger
      return (
        <StaticMap hikePath={hike.routePath} />
      );
    }
  }

  render() {
    const hikes = Object.keys(this.props.hikes).map(hikeId => {
      return this.props.hikes[hikeId];
    });

    const routeOptions = hikes.map( (hike, idx) => (
      <option key={idx} value={hike.id} >{hike.title}</option>
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
                onChange={this.update("distance")}
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
              <select value={this.state.route} onChange={this.update("routeId")}>
                <option disabled value="">select a route</option>
                { routeOptions }
              </select>
            </div>
            <br />

            <div className="form-input-div">
              <input
                type="submit"
                onClick={this.handleSubmit}
                value={"Create!"}
                />
            </div>
        </form>
        { this.renderMap() }
      </div>
    );
  }
}

export default WorkoutForm;
