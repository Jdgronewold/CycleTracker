import * as WorkoutAPIUtils from '../utils/workout_api_utils';

export const RECEIVE_WORKOUTS = "RECEIVE_WORKOUTS";
export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const REMOVE_WORKOUT = "REMOVE_WORKOUT";
export const ADD_WORKOUT = "ADD_WORKOUT";


//SYNC
export const receiveWorkouts = (workouts) => {
  return ({
    type: RECEIVE_WORKOUTS,
    workouts
  });
};

export const addWorkout = (workout) => ({
  type: ADD_WORKOUT,
  workout
});

export const receiveWorkout = (workout) => ({
  type: RECEIVE_WORKOUT,
  workout
});

export const removeWorkout = (workout) => ({
  type: REMOVE_WORKOUT,
  workout
});

//ASYNC

export const fetchWorkouts = () => dispatch => {
  return WorkoutAPIUtils.fetchWorkouts().then(workouts => dispatch(receiveWorkouts(workouts)));
};

export const fetchWorkout = (id) => dispatch => {
  return WorkoutAPIUtils.fetchWorkout(id).then(workout => dispatch(receiveWorkout(workout)));
};

export const createWorkout = (workout) => dispatch => {
  return WorkoutAPIUtils.createWorkout(workout).then(workout => dispatch(addWorkout(workout)));
};

export const updateWorkout = (workout) => dispatch => {
  return WorkoutAPIUtils.updateWorkout(workout).then(workout => dispatch(receiveWorkout(workout)));
};

export const deleteWorkout = (id) => dispatch => {
  return WorkoutAPIUtils.deleteWorkout(id).then(workout => dispatch(removeWorkout(workout)));
};
