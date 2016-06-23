import React, {
    Component,
    PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
                            <Input type="text" />
                        </Col>
                        <Col xs={2}>
                            <Button>Search</Button>
                        </Col>
                    </Row>
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
