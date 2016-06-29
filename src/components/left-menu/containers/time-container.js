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

export default class TimeContainer extends Component {

    constructor(props) {
        super(props);
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

    state = {
        time: ``,
        interval: null
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