import { combineReducers } from 'redux';
import { reducer as rankReducer} from '../page/rank/store';

export default combineReducers({
  rank: rankReducer
});
