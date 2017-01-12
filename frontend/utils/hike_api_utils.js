
export const fetchHikes = () => (
  $.ajax({
    method: "GET",
    url: "api/hikes"
  })
);

export const fetchHike = (id) => (
  $.ajax({
    method: "GET",
    url: `api/hikes/${id}`,
    data: { id }
  })
);

export const createHike = (hike) => (
  $.ajax({
    method: "POST",
    url: "api/hikes",
    data: { hike }
  })
);

export const updateHike = (hike) => (
  $.ajax({
    method: "PATCH",
    url: `api/hikes/${hike.id}`,
    data: { hike }
  })
);

export const deleteHike = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/hikes/${id}`,
    data: { id }
  })
);
