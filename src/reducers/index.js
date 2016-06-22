import { combineReducers } from 'redux';
import AppReducer from './app.js';

const reducers = {
    app: AppReducer
};
module.exports = combineReducers(reducers);
