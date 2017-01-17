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

export const createFriend = (friend) => (
  $.ajax({
    method: 'POST',
    url: 'api/friends',
    data: { friend }
  })
);

export const deleteFriend = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/friends/${id}`,
    data: { id }
  })
);

export const fetchCertainFriends = (query) => (
  $.ajax({
    method: "GET",
    url: `api/friends/search`,
    data: { query }
  })
);
