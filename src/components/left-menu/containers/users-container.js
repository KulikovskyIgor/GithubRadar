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
            <Row>
                <Col md={12}>
                    {_.map(this.props.app.users, user => {
                        return <UserItemView
                            key={user.author.id}
                            login={user.author.login}
                            avatarUrl={user.author.avatar_url}
                            />
                    })}
                </Col>
            </Row>
        );
    }
}

function mapStateToProps(store, props) {
    return {app: store.app};
}

export default connect(mapStateToProps)(UserMenu);

