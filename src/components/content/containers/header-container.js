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

class HeaderContainer extends Component {
    render() {
        return (
            <Row className="header-container">
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
                                   onChange={this._handleChangeRepo}
                                   onKeyPress={this._handleFetchUsersByEnter}
                                />
                        </Col>
                        <Col xs={2}>
                            <Button
                                onClick={this._fetchStatistic}
                                >Search</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }

    _handleChangeRepo = (e) => {
        this.props.actions.SET_REPO(e.target.value);
    }

    _handleFetchUsersByEnter = (e) => {
        if (e.key === 'Enter') {
            this._fetchStatistic();
        }
    }

    _fetchStatistic = () => {
        this.props.actions.FETCH_USERS();
        this.props.actions.FETCH_COMMITS();
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
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(HeaderContainer);
