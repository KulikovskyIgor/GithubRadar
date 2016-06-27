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

export default class UserItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Row className="user">
                <Col md={2}>
                    <Image className="avatar" src={this.props.avatarUrl} circle />
                </Col>
                <Col md={10}>
                    {this.props.login}
                </Col>
            </Row>
        );
    }
}

UserItem.propTypes = {
    login: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string
}

UserItem.defaultProps = {
    login: null,
    avatarUrl: null
}