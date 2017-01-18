import { combineReducers } from 'redux';
import SessionReducer from './sessions_reducer';
import HikesReducer from './hikes_reducer';
import HikeDetailReducer from './hike_detail_reducer';
import WorkoutsReducer from './workouts_reducer';
import WorkoutDetailReducer from './workout_detail_reducer';
import FriendsReducer from './friends_reducer';
import FriendDetailReducer from './friend_detail_reducer';
import FriendSearchReducer from './friend_search_reducer';
import ActivityReducer from './activity_reducer';


export default combineReducers({
  session: SessionReducer,
  hikes: HikesReducer,
  hikeDetail: HikeDetailReducer,
  workouts: WorkoutsReducer,
  workoutDetail: WorkoutDetailReducer,
  friends: FriendsReducer,
  friendDetail: FriendDetailReducer,
  friendSearch: FriendSearchReducer,
  activities: ActivityReducer
});
