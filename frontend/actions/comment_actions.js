import * as CommentAPIUtils from '../utils/comment_api_utils';

export const RECEIVE_ACTIVITY = "RECEIVE_ACTIVITY";

export const receiveActivity = (activity) => ({
  type: RECEIVE_ACTIVITY,
  activity
});


export const createComment = (comment, activity) => dispatch => {
  return CommentAPIUtils.createComment(comment, activity)
    .then(activity => dispatch(receiveActivity(activity)));
};

export const deleteComment = (id, activity) => dispatch => {
  return CommentAPIUtils.deleteComment(id, activity)
    .then(activity => dispatch(receiveActivity(activity)));
};
