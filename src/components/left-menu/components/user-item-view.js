import React, { Component, PropTypes } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const UserItemView = ({login, avatarUrl, commitsProgress}) => {
    return (
        <Row className="user">
            <Col xs={2}>
                <Image className="avatar" src={avatarUrl} circle/>
            </Col>
            <Col xs={10}>
                <Row>
                    <Col xs={12}>
                        <span className="login">{login}</span>

                        <div className="commits-progress">
                            <div className="progress" style={{width: `${commitsProgress}%`}}></div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

UserItemView.propTypes = {
    login: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    commitsProgress: PropTypes.number
}

UserItemView.defaultProps = {
    login: null,
    avatarUrl: null,
    commitsProgress: 0
}

export default UserItemView;
