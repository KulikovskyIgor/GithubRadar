import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

import { Row, Col, Image } from 'react-bootstrap';
import UserItem from '../../../../src/components/left-menu/components/user-item-view';

describe('UserItemView', () => {

  it('Should render user item view', () => {

    const renderer = TestUtils.createRenderer();
    renderer.render(<UserItem login={'super-user'} avatarUrl={'avatar'} commitsProgress={100}/>);
    const actual = renderer.getRenderOutput();

    const expected = (
      <Row className="user">
        <Col xs={2}>
          <Image className="avatar" src="avatar" circle/>
        </Col>
        <Col xs={10}>
          <Row>
            <Col xs={12}>
              <span className="login">super-user</span>

              <div className="commits-progress">
                <div className="progress" style={{width: `100%`}}></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );

    expect(actual).toEqualJSX(expected);
  });
});
