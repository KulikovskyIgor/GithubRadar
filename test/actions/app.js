import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import fetchMock from 'fetch-mock';
import * as actions from '../../src/actions/app';
import * as types from '../../src/constants/app';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Redux | actions | app.js', () => {

  afterEach(fetchMock.restore);

  it('Should create an action to set repo', () => {
    const text = "Testing repo";
    const expectedRepo = {
      type: types.SET_REPO,
      data: text
    };
    expect(actions.SET_REPO(text)).toEqual(expectedRepo);
  });

  it('Should create an action to set users', () => {
    const users = [{author: {}, total: 0, weeks: []}];
    const expectedAction = {
      type: types.SET_USERS,
      data: users
    };
    expect(actions.SET_USERS(users)).toEqual(expectedAction);
  });

  it('Should create an action to set commits', () => {
    const commits = [[0, 0, 19], [0, 1, 1]];
    const expectedAction = {
      type: types.SET_COMMITS,
      data: commits
    };
    expect(actions.SET_COMMITS(commits)).toEqual(expectedAction);
  });

  it('Should create an action to fetch users', () => {

    const repo = "demo";

    fetchMock.mock(`https://api.github.com/repos/${repo}/stats/contributors`, {
      status: 200, body: [{author: {}, total: 0, weeks: []}]
    });

    const expectedActions = [
      {type: types.TOGGLE_LOADER},
      {type: types.SET_USERS_STATISTIC, data: {commits: {}, maxPerMonth: 0}},
      {type: types.SET_USERS, data: []},
      {type: types.TOGGLE_LOADER}
    ];
    const store = mockStore({
      app: {repo}
    });

    return store.dispatch(actions.FETCH_USERS())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      });
  });

  it('Should create an action to fetch commits', () => {

    const repo = "demo";

    fetchMock.mock(`https://api.github.com/repos/${repo}/stats/punch_card`, {
      status: 200, body: [[0, 0, 19], [0, 1, 1]]
    });

    const expectedActions = [
      {type: types.TOGGLE_LOADER},
      {type: types.SET_COMMITS, data: [[0, 0, 19], [0, 1, 1]]},
      {type: types.TOGGLE_LOADER}
    ];
    const store = mockStore({
      app: {repo}
    });

    return store.dispatch(actions.FETCH_COMMITS())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      });
  });
});
