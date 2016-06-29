import React from 'react';
import { Row, Col } from 'react-bootstrap';

const LeaderBoardView = () => {
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
};

export default LeaderBoardView;
