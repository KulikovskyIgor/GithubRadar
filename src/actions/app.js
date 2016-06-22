import * as AppConstants from './../constants/app.js';

export function FETCH_USERS() {
    return (dispatch, getState) => {
        //fetch(``)
        //    .then((response) => {
        //        if (response.status !== 200) {
        //            throw new Error(response.status);
        //        }
        //        return response.json();
        //    })
        //    .then(data => {
        //
        //    })
        //    .catch(error => {
        //        console.log(error);
        //    }
        //);
        dispatch(SET_USERS(null));
    }
}

export function SET_USERS(data) {
    return {
        type: AppConstants.SET_USERS,
        data
    }
}
