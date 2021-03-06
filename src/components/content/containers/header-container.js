import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from './../../../actions/app.js';
import { Row, Col, Input, Button } from 'react-bootstrap';

class HeaderContainer extends Component {
    render() {
        return (
            <Row className="header-container">
                <Col xs={12}>
                    <Row>
                        <Col className="title" xs={12}>
                            <h3>github radar</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="repo" xs={2} xsOffset={1}>
                            <h4>repo:</h4>
                        </Col>
                        <Col className="repo-value" xs={6}>
                            <Input type="text"
                                   value={this.props.app.repo}
                                   onChange={this._handleChangeRepo}
                                   onKeyPress={this._handleFetchUsersByEnter}
                                />
                        </Col>
                        <Col className="search" xs={2}>
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

function mapStateToProps(store) {
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
