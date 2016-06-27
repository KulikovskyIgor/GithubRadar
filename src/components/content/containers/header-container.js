import React, {
    Component,
    PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from './../../../actions/app.js';
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

class Content extends Component {
    render() {
        const {actions} = this.props;
        return (
            <Row>
                <Col xs={12}>
                    <Row>
                        <Col mdOffset={1} md={10}>
                            <h3>github radar</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <h4>repo</h4>
                        </Col>
                        <Col md={8}>
                            <Input type="text"
                                   value={this.props.app.repo}
                                   onChange={this.handleChangeRepo}
                                   onKeyPress={this.handleFetchUsersByEnter}
                                />
                        </Col>
                        <Col xs={2}>
                            <Button
                                onClick={this.props.actions.FETCH_USERS}
                                >Search</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }

    handleChangeRepo = (e) => {
        this.props.actions.SET_REPO(e.target.value);
    }

    handleFetchUsersByEnter = (e) => {
        if (e.key === 'Enter') {
            this.props.actions.FETCH_USERS();
        }
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
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Content);
