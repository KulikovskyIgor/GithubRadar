import React, {
    Component,
    PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserItem from './components/user-item.js';
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

class UserMenu extends Component {
    render() {
        return (
            <Row className="users-menu">
                <Col md={12}>
                    <Row>
                        <Col md={12}>
                            15:38:51p
                        </Col>
                    </Row>
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
                    <Row>
                        <Col md={12}>
                            {_.map(this.props.users, user => {
                                return <UserItem
                                    key={user.author.id}
                                    login={user.author.login}
                                    avatarUrl={user.author.avatar_url}
                                    />
                            })}
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

UserMenu.propTypes = {
    users: PropTypes.array
};

UserMenu.defaultProps = {
    users: []
};

export default connect()(UserMenu);
