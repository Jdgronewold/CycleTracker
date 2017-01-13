import React from 'react';
import MapForm from './map_detail';


class HikeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.resetForm();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.renderMap = this.renderMap.bind(this);
  }

  resetForm() {
    return ({
      title: "",
      description: "",
      distance: 0,
      mapPoints: [],
      routePath: ""
    });
  }

  handleSubmit() {
    const hike = this.state;
    this.props.createHike(hike).then(() => this.resetForm());
  }

  update(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }

  updateFromChild(key, value) {
    this.setState({[key]: value});
  }

  renderMap() {
    return(
      <MapForm
        updateFromChild={this.updateFromChild}
        mapForm={true}
        mapPoints={this.state.mapPoints}
      />
    );
  }

  render() {
    return (
      <div className="form-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
          />
        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          value={this.state.description}
          onChange={this.update("description")}>
        </textarea>
        </form>

        { this.renderMap() }
      </div>
    );
  }
}

export default HikeForm;
