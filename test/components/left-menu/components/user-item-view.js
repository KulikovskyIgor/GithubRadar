import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

import { Row, Col, Image } from 'react-bootstrap';

describe('UsersContainer', () => {

  it('Should render user container without users', () => {

    const renderer = TestUtils.createRenderer();
    renderer.render(<UsersItem login={'super-user'} avatarUrl={'avatar'} commitsProgress={100}/>);
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

    //let component = TestUtils.renderIntoDocument(
    //    <Provider store={store()}>
    //        <UsersContainer />
    //    </Provider>
    //);
    //
    //console.log('comp', component);
    //console.log('getWrappedInstance', component.getWrappedInstance);

  });
});

const getUserItemTemaplate = (login) => {
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
}
