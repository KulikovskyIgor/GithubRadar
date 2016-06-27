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
            <Row>
                <Col md={12}>
                    <Row>
                        <Col mdOffset={1} md={11}>
                            leaderboard
                        </Col>
                    </Row>
                    <Row>
                        <Col mdOffset={1} md={11}>
                            last 30 days
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}