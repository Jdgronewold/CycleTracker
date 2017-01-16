export const fetchFriends = () => (
  $.ajax({
    method: "GET",
    url: "api/friends"
  })
);

export const fetchFriend = (id) => (
  $.ajax({
    method: "GET",
    url: `api/friends/${id}`,
    data: { id }
  })
);

export const createFriend = (friend_join) => (
  $.ajax({
    method: 'POST',
    url: 'api/friends',
    data: { friend_join }
  })
);

export const deleteFriend = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/friends/${id}`,
    data: { id }
  })
);
