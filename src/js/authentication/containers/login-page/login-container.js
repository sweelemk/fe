import { connect } from 'react-redux';
import LoginPage from 'authentication/components/login-page/login-page';

import { loadCredentials } from 'authentication/actions/login-actions';

export default connect(state => ({
    isCredentialLoadings: state.credentialsUser.get('isCredentialLoadings'),
    credential: state.credentialsUser.get('credentials'),
    credentialError: state.credentialsUser.get('credentialError')
}), dispatch => ({
    onLogIn: (data) => {
        dispatch(loadCredentials(data));
    }
}))(LoginPage);
