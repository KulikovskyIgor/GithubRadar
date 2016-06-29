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
import ContentContainer from './content/index.js';
import LeftMenuContainer from './left-menu/index.js';

class App extends Component {

    componentWillMount() {
        //this.props.actions.FETCH_USERS();
    }

    render() {
        const {actions} = this.props;
        return (
            <div className="container">
                <Row>
                    <Col md={8}>
                        <ContentContainer />
                    </Col>
                    <Col md={4}>
                        <LeftMenuContainer users={this.props.app.users} />
                    </Col>
                </Row>
            </div>
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
