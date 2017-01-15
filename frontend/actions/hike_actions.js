import * as HikeAPIUtils from '../utils/hike_api_utils';

export const RECEIVE_HIKES = "RECEIVE_HIKES";
export const RECEIVE_HIKE = "RECEIVE_HIKE";
export const REMOVE_HIKE = "REMOVE_HIKE";
export const ADD_HIKE = "ADD_HIKE";


//SYNC
export const receiveHikes = (hikes) => ({
  type: RECEIVE_HIKES,
  hikes
});

export const addHike = (hike) => ({
  type: ADD_HIKE,
  hike
});

export const receiveHike = (hike) => ({
  type: RECEIVE_HIKE,
  hike
});

export const removeHike = (hike) => ({
  type: REMOVE_HIKE,
  hike
});

//ASYNC

export const fetchHikes = () => dispatch => {
  return HikeAPIUtils.fetchHikes().then(hikes => dispatch(receiveHikes(hikes)));
};

export const fetchHike = (id) => dispatch => {
  return HikeAPIUtils.fetchHike(id).then(hike => dispatch(receiveHike(hike)));
};

export const createHike = (hike) => dispatch => {
  return HikeAPIUtils.createHike(hike).then(hike => dispatch(addHike(hike)));
};

export const updateHike = (hike) => dispatch => {
  return HikeAPIUtils.updateHike(hike).then(hike => dispatch(receiveHike(hike)));
};

export const deleteHike = (id) => dispatch => {
  return HikeAPIUtils.deleteHike(id).then(hike => dispatch(removeHike(hike)));
};
