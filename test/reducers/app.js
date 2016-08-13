import expect from 'expect';
import reducer from '../../src/reducers/app';
import * as types from '../../src/constants/app';

describe('Redux | reducers | app.js', () => {

  it('Should return the init state', () => {
    const initSate = {
      users: [],
      commits: [],
      usersStatistic: {},
      repo: 'facebook/react',
      isLoaded: true
    };

    expect(reducer(undefined, {})).toEqual(initSate);
  });

  it('Should handle SET_USERS', () => {
    const user = [{author: {}, total: 0, weeks: []}];
    const expected = {
      users: user,
      commits: [],
      usersStatistic: {},
      repo: 'facebook/react',
      isLoaded: true
    };

    expect(reducer(undefined, {
      type: types.SET_USERS,
      data: user
    })).toEqual(expected);
  });

  it('Should handle SET_USERS_STATISTIC', () => {
    const statistic = {
      maxPerMonth: 12,
      commits: [{
        6820: 1,
        8445: 12,
        55161: 1
      }]
    };
    const expected = {
      users: [],
      commits: [],
      usersStatistic: statistic,
      repo: 'facebook/react',
      isLoaded: true
    };

    expect(reducer(undefined, {
      type: types.SET_USERS_STATISTIC,
      data: statistic
    })).toEqual(expected);
  });

  it('Should handle SET_COMMITS', () => {
    const commits = [[0, 0, 19], [0, 1, 1]];
    const expected = {
      users: [],
      commits: commits,
      usersStatistic: {},
      repo: 'facebook/react',
      isLoaded: true
    };

    expect(reducer(undefined, {
      type: types.SET_COMMITS,
      data: commits
    })).toEqual(expected);
  });

  it('Should handle SET_REPO', () => {
    const text = "Testing repo";
    const expected = {
      users: [],
      commits: [],
      usersStatistic: {},
      repo: text,
      isLoaded: true
    };

    expect(reducer(undefined, {
      type: types.SET_REPO,
      data: text
    })).toEqual(expected);
  });

  it('Should handle TOGGLE_LOADER', () => {
    const expected = {
      users: [],
      commits: [],
      usersStatistic: {},
      repo: 'facebook/react',
      isLoaded: false
    };

    expect(reducer(undefined, {
      type: types.TOGGLE_LOADER
    })).toEqual(expected);
  });
});
