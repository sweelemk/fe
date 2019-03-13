import { connect } from 'react-redux';
import RegisterPage from 'authentication/components/register-page/register-page';

import { loadRegisterInfo } from 'authentication/actions/register-actions';

export default connect(state => ({
    isRegisterLoadings: state.registerUser.get('isRegisterLoadings'),
    registerInfo: state.registerUser.get('registerInfo')
}), dispatch => ({
    onSignUp: (data) => {
        dispatch(loadRegisterInfo(data));
    }
}))(RegisterPage);
