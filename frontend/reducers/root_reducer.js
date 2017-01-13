import { combineReducers } from 'redux';
import SessionReducer from './sessions_reducer';
import HikesReducer from './hikes_reducer';
import HikeDetailReducer from './hike_detail_reducer';


export default combineReducers({
  session: SessionReducer,
  hikes: HikesReducer,
  hikeDetail: HikeDetailReducer
});
