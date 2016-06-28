import React, {
    Component,
    PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    Nav,
    NavItem,
    Tabs,
    Tab,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Button,
    Input,
    Image
} from 'react-bootstrap';
import HeaderContainer from './containers/header-container.js';
import ChartContainer from './containers/chart-container.js';


class Content extends Component {
    render() {
        return (
            <Row className="content-container">
                <Col xs={12}>
                    <HeaderContainer />
                    <ChartContainer />
                </Col>
            </Row>
        );
    }
}

Content.propTypes = {
    actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
    const props = {};
    return props;
}
function mapDispatchToProps(dispatch) {
    const actions = {};
    const actionMap = {actions: bindActionCreators(actions, dispatch)};
    return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);
