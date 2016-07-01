import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import ContentContainer from './content/index.js';
import LeftMenuContainer from './left-menu/index.js';

class App extends Component {

    render() {
        return (
            <div className="container">
                <Row>
                    <Col md={8}>
                        <ContentContainer />
                    </Col>
                    <Col md={4}>
                        <LeftMenuContainer users={this.props.app.users}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {app: store.app};
}

export default connect(mapStateToProps)(App);
