import React, {
    Component,
    PropTypes
} from 'react';
import { connect } from 'react-redux';
import UserItemView from './../components/user-item-view.js';
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
            <Row className="users-container">
                <Col md={12}>
                    {_.map(this.props.app.users, user => {
                        return <UserItemView
                            key={user.author.id}
                            login={user.author.login}
                            avatarUrl={user.author.avatar_url}
                            commitsProgress={this._getCommitsProgress(user.author.id)}
                            />
                    })}
                </Col>
            </Row>
        );
    }

    _getCommitsProgress(userId) {
        return ((this.props.app.usersStatistic.commits[userId] * 100) / this.props.app.usersStatistic.maxPerMonth);
    }
}

function mapStateToProps(store, props) {
    return {app: store.app};
}

export default connect(mapStateToProps)(UserMenu);

