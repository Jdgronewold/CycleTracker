import React from 'react';

class FeedComments extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.update = this.update.bind(this);
    this.state = { body: "" };
  }

  handleDelete(id) {
    return (e) => {
      e.preventDefault();
      const activity = { type: this.props.type, id: this.props.activityId};
      this.props.delete(id, activity);
    };
  }

  handleCreate(e) {
    e.preventDefault(e);
    const activity = { type: this.props.type, id: this.props.activityId};
    const comment = this.state;
    this.props.create(comment, activity);
  }

  update(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    const comments = this.props.comments.map( (comment, idx) => {

      let commentDelete;
      if(comment.currentUserId === comment.user_id) {
        commentDelete = (
          <button
            className="comment-delete-button"
            onClick={this.handleDelete(comment.id)}> Delete </button>
        );
      } else {
        commentDelete = ( <div></div>);
      }

      // <div className="comment-picture">
      //   <img src={comment.author.picture} />
      // </div>

      return (
        <li key={idx} className="comment-li">
          <div className="comment-data">
            <div className="comment-text">
              <div className="comment-name">
                <span> <b>{comment.author.username}</b></span>
              </div>
              <div className="comment-body">
                <span> <b>{comment.body}</b></span>
              </div>
            </div>
            <div className="comment-button">
              { commentDelete }
            </div>
          </div>
        </li>
      );
    });

    return (
      <div className="comment-box">
        <ul>
          { comments }
        </ul>
        <div className="comment-data">
          <div className="comment-textarea">
            <textarea
              id="description"
              value={this.state.commentText}
              placeholder="Add new comment"
              onChange={this.update("body")}>
            </textarea>
          </div>
          <div className="comment-button">
            <button onClick={this.handleCreate}> Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedComments;
