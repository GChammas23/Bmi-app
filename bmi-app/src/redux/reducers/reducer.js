import { combineReducers } from 'redux';

import userReducer from './userReducer';
import bmiReducer from './bmiReducer';

const reducers = combineReducers({
    userReducer,
    bmiReducer,
});

export default reducers;
