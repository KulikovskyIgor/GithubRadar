import React, {
    Component
} from 'react';
import {
    Nav,
    NavItem,
    Tabs,
    Tab,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Button,
    Input,
    Image
    } from 'react-bootstrap';

export default class LeaderBoardView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row className="leader-board-view">
                <Col md={12}>
                    <Row>
                        <Col className="leaderboard" md={12}>
                            leaderboard
                        </Col>
                    </Row>
                    <Row>
                        <Col className="last-days" md={12}>
                            last 30 days
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}