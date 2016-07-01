import * as AppConstants from './../constants/app.js';
import { handleStatusCode } from '../utils/handle-status-code.js';

export function FETCH_USERS() {
    return (dispatch, getStore) => {
        const {repo} = getStore().app;
        fetch(`https://api.github.com/repos/${repo}/stats/contributors`)
            .then(handleStatusCode)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                const filteredUsers = _.reduce(data, (res, user) => {
                    let isHasCommitsLastMonth = !_.chain(user.weeks)
                        .takeRight(4)
                        .every(['c', 0])
                        .value();
                    if (isHasCommitsLastMonth) res.push(user);
                    return res;
                }, []);
                dispatch(SET_USERS_STATISTIC(filteredUsers));
                dispatch(SET_USERS(filteredUsers));
            })
            .catch(error => {
                console.log(error);
            }
        );
    }
}

export function FETCH_COMMITS() {
    return (dispatch, getStore) => {
        const {repo} = getStore().app;
        fetch(`https://api.github.com/repos/${repo}/stats/punch_card`)
            .then(handleStatusCode)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                dispatch(SET_COMMITS(data));
            })
            .catch(error => {
                console.log(error);
            }
        );
    }
}

export function SET_USERS_STATISTIC(users) {
    let data = {
        commits: {},
        maxPerMonth: 0
    };

    _.forEach(users, user => {
        let count = _.chain(user.weeks)
            .takeRight(4)
            .reduce((res, week) => res + week.c, 0)
            .value();
        data.commits[user.author.id] = count;
        data.maxPerMonth = count > data.maxPerMonth ? count : data.maxPerMonth;
    });

    return {
        type: AppConstants.SET_USERS_STATISTIC,
        data
    }
}

export function SET_USERS(data) {
    return {
        type: AppConstants.SET_USERS,
        data
    }
}

export function SET_COMMITS(data) {
    return {
        type: AppConstants.SET_COMMITS,
        data
    }
}

export function SET_REPO(data) {
    return {
        type: AppConstants.SET_REPO,
        data
    }
}