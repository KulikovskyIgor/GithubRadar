import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import HeaderContainer from './containers/header-container.js';
import ChartContainer from './containers/chart-container.js';

export default class Content extends Component {
    render() {
        return (
            <Row className="content-container">
                <Col xs={12}>
                    <HeaderContainer />
                    <ChartContainer />
                </Col>
            </Row>
        );
    }
}
