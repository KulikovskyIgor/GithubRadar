import * as AppConstants from './../constants/app.js';

export function FETCH_USERS() {
    return (dispatch, getStore) => {
        const {repo} = getStore().app;
        fetch(`https://api.github.com/repos/${repo}/stats/contributors`)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => {
                const filteredUsers = _.reduce(data, (res, item) => {
                    let isHasCommitsLastMonth = !_.chain(item.weeks)
                        .takeRight(4)
                        .every(['c', 0])
                        .value();
                    if (isHasCommitsLastMonth) res.push(item);
                    return res;
                }, []);
                dispatch(SET_USERS(filteredUsers));
            })
            .catch(error => {
                console.log(error);
            }
        );
    }
}

export function SET_USERS(data) {
    return {
        type: AppConstants.SET_USERS,
        data
    }
}

export function SET_REPO(data) {
    return {
        type: AppConstants.SET_REPO,
        data
    }
}