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
      hours: 0,
      minutes: 0,
      seconds: 0,
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
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }

  handleSubmit() {
    const workout = this.state;
    this.props.createWorkout(workout)
    .then((result) => {
      hashHistory.push(`/hikes/${result.workout.id}`);
    });
  }

  renderMap() {
    if(this.state.routeId !== 0) {
      const hike = this.props.hikes[this.state.routeId];
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

            <div className="form-input-time">
              <label htmlFor="hours">Time: &nbsp; </label>
              <input
                id="hours"
                type="number"
                min="0"
                max="60"
                value={this.state.hours}
                onChange={this.update("hours")}
                /> : &nbsp;
                <input
                  id="minutes"
                  type="number"
                  min="0"
                  max="59"
                  value={this.state.minutes}
                  onChange={this.update("minutes")}
                  /> : &nbsp;
                  <input
                    id="seconds"
                    type="number"
                    min="0"
                    max="59"
                    required
                    value={this.state.seconds}
                    onChange={this.update("seconds")}
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
