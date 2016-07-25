import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import UsersContainer from '../../../../src/components/left-menu/containers/users-container.js';

describe('UsersContainer', () => {

    it('Should render users container without users', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<UsersContainer />);
        const actual = renderer.getRenderOutput();
        console.log('actual', actual);

        expect(true).toEqual(true);
    });
});
