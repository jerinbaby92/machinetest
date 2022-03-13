import {combineReducers} from 'redux';
import cardReducer from './cardReducer';
import networkReducer from './networkReducer';


export default combineReducers({
  cardReducer: cardReducer,
  network: networkReducer,
});
