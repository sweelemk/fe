import { connect } from 'react-redux';

import Main from 'main/components/main/main';

export default connect(state => ({
    user: state.user
}), dispatch => ({}))(Main);
