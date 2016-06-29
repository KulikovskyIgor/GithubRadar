import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class TimeContainer extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        time: ``,
        interval: null
    }

    componentDidMount() {
        const interval = setInterval(() => {
            this.setState({time: this._getTime()});
        }, 1000);
        this.setState({interval: interval});
        this.setState({time: this._getTime()});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <Row className="time-container">
                <Col md={12}>
                    {this.state.time}
                </Col>
            </Row>
        );
    }

    _getTime = () => {
        var date = new Date();
        var options = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        return date.toLocaleString("en-US", options);
    }
}