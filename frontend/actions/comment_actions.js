import * as CommentAPIUtils from '../utils/comment_api_utils';

export const createComment = (comment, activity) => {
  return CommentAPIUtils.createComment(comment, activity);
};

export const deleteComment = (id) => {
  return CommentAPIUtils.deleteComment(id);
};
