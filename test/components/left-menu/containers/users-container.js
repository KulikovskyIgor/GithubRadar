import React from 'react';
import expect from 'expect';
import createComponent from '../../../helpers/shallowRenderHelper'
import {UsersMenu} from '../../../../src/components/left-menu/containers/users-container';

describe('UsersContainer', () => {

  it('Should render users empty container', () => {

    const mockAppStore = {
      users: [],
      usersStatistic: {}
    };

    const actual = createComponent(UsersMenu, {app: mockAppStore});
    const expected = 0;

    expect(actual.props.children.props.children.length).toEqual(expected);
  });

  it('Should render users container with two children', () => {

    const mockAppStore = {
      users: [
        {author: {id: 100, login: 'test'}},
        {author: {id: 200, login: 'test 2'}}
      ],
      usersStatistic: {
        commits: {100: 15, 200: 5},
        maxPerMonth: 5
      }
    };

    const actual = createComponent(UsersMenu, {app: mockAppStore});
    const expected = 2;

    expect(actual.props.children.props.children.length).toEqual(expected);
  });
});
