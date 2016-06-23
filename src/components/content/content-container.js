import React, {
    Component,
    PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderContainer from './header-container.js';

class Content extends Component {
    render() {
        const {actions} = this.props;
        return (
            <div>
                <HeaderContainer />
            </div>
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
