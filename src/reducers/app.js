import * as AppConstants from '../constants/app.js';

const initSate = {
    users: [],
    repo: 'reactjs/redux'
};

export default function App(state = initSate, action) {
    switch (action.type) {
        case AppConstants.SET_USERS:
            return Object.assign({}, state, {
                users: action.data
            });
        case AppConstants.SET_REPO:
            return Object.assign({}, state, {
                repo: action.data
            });
        default:
            return state;
    }
}