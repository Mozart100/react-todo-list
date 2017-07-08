import {combineReducers} from 'redux';
import userReducer from './UserReducer';
import todoReducer from './TodoReducer';

const rootReducer = combineReducers({
        todos:todoReducer,
        user:userReducer
});

export default rootReducer;