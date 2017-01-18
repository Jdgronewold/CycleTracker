
export const createComment = (comment, activity) => (
  $.ajax({
    method: "POST",
    url: "api/comments",
    data: { comment, activity }
  })
);

export const deleteComment = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/comments/${id}`,
    data: { id }
  })
);
