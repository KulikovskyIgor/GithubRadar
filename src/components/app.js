import React, {
    Component,
    PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from './../actions/app.js';
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
import ContentContainer from './content/content-container.js';
import UsersMenuContainer from './users-menu/users-menu-container.js';

class App extends Component {

    componentWillMount() {
        this.props.actions.FETCH_USERS();
    }

    render() {
        const {actions} = this.props;
        return (
            <Row>
                <Col md={8}>
                    <ContentContainer />
                </Col>
                <Col md={4}>
                    <UsersMenuContainer users={this.props.app.users} />
                </Col>
            </Row>
        );
    }
}
function mapStateToProps(store, props) {
    return {app: store.app};
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(AppActions, dispatch);
}
function mergeProps(mapState, mapDispatch, ownProps) {
    return {
        ...mapState,
        ...ownProps,
        actions: {
            ...mapDispatch
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);
