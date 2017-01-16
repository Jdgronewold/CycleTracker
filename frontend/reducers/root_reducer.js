import { combineReducers } from 'redux';
import SessionReducer from './sessions_reducer';
import HikesReducer from './hikes_reducer';
import HikeDetailReducer from './hike_detail_reducer';
import WorkoutsReducer from './workouts_reducer';
import WorkoutDetailReducer from './workout_detail_reducer';
import FriendsReducer from './friends_reducer';


export default combineReducers({
  session: SessionReducer,
  hikes: HikesReducer,
  hikeDetail: HikeDetailReducer,
  workouts: WorkoutsReducer,
  workoutDetail: WorkoutDetailReducer,
  friends: FriendsReducer
});
