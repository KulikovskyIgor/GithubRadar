import React, {
    Component,
    PropTypes
} from 'react';
import {
    Alert,
    Nav,
    NavItem,
    Tabs,
    Tab,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    ButtonGroup,
    Button,
    Input,
    Image
} from 'react-bootstrap';
import UsersContainer from './containers/users-container.js';
import TimeContainer from './containers/time-container.js';
import LeaderBoardView from './components/leader-board-view.js';

export default class LeftMenu extends Component {
    render() {
        return (
            <Row className="users-menu">
                <Col md={12}>
                    <TimeContainer />
                    <LeaderBoardView />
                    <UsersContainer />
                </Col>
            </Row>
        );
    }
}