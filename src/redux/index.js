import {combineReducers} from "redux";
import gamePlay from './reducers/GamePlayReducer'

const rootReducer = combineReducers({
    gamePlay
});

export default rootReducer;