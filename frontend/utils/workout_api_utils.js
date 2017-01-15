
export const fetchWorkouts = () => (
  $.ajax({
    method: "GET",
    url: "api/workouts"
  })
);

export const fetchWorkout = (id) => (
  $.ajax({
    method: "GET",
    url: `api/workouts/${id}`,
    data:  { id }
  })
);

export const createWorkout = (hike) => (
  $.ajax({
    method: "POST",
    url: "api/workouts",
    data: { hike }
  })
);

export const updateWorkout = (hike) => (
  $.ajax({
    method: "PATCH",
    url: `api/workouts/${hike.id}`,
    data: { hike }
  })
);

export const deleteWorkout = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/workouts/${id}`,
    data: { id }
  })
);
