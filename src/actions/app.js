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
                dispatch(SET_USERS(data));
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
