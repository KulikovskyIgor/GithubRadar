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

export default class UserItemView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row className="user">
                <Col xs={2}>
                    <Image className="avatar" src={this.props.avatarUrl} circle/>
                </Col>
                <Col xs={10}>
                    <Row>
                        <Col xs={12}>
                            <span className="login">{this.props.login}</span>

                            <div className="commits-progress">
                                <div className="progress" style={{width: this.props.commitsProgress + `%`}}></div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

UserItemView.propTypes = {
    login: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    commitsProgress: PropTypes.number
}

UserItemView.defaultProps = {
    login: null,
    avatarUrl: null,
    commitsProgress: 0
}