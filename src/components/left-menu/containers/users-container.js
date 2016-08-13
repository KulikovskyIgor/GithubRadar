import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import className from 'classnames';
import { Row, Col } from 'react-bootstrap';
import UserItemView from './../components/user-item-view.js';

export class UsersMenu extends Component {
    render() {
        const {users, usersStatistic} = this.props.app;
        const sortedUsers = _.chain(users)
            .sortBy(user => usersStatistic.commits[user.author.id])
            .reverse()
            .value();

        return (
            <Row className="users-container">
                <Col md={12}>
                    {_.map(sortedUsers, user => {
                        return <UserItemView
                            key={user.author.id}
                            login={user.author.login}
                            avatarUrl={user.author.avatar_url}
                            commitsProgress={this._getCommitsProgress(user.author.id, usersStatistic)}
                            />
                    })}
                </Col>
            </Row>
        );
    }

    _getCommitsProgress(userId, usersStatistic) {
        return ((usersStatistic.commits[userId] * 100) / usersStatistic.maxPerMonth);
    }
}

function mapStateToProps(store) {
    return {app: store.app};
}

export default connect(mapStateToProps, null, null, { withRef: true })(UsersMenu);

