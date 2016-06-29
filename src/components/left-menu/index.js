import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import UsersContainer from './containers/users-container.js';
import TimeContainer from './containers/time-container.js';
import LeaderBoardView from './components/leader-board-view.js';

export default class LeftMenu extends Component {
    render() {
        return (
            <Row className="left-menu-container">
                <Col xs={12}>
                    <TimeContainer />
                    <LeaderBoardView />
                    <UsersContainer />
                </Col>
            </Row>
        );
    }
}