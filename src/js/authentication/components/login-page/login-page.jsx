import React, { Fragment, PureComponent } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Logo } from '../../../../icons/logo';

import LoginForm from 'authentication/components/forms/login-form/login-form';

import 'authentication/components/sign.scss';
import SignBG from '../../../../img/sign-bg.jpg';
import { logoStyle } from 'main/constants/page-constants';

class LoginPage extends PureComponent {

    onSubmit = (data) => {
        const { onLogIn } = this.props;
        console.log(this.props);
        onLogIn(data);
    };

    render() {
        return (
            <Fragment>
                <div className='sign-wrapper'>
                    <div className='sign-columns sign__grid'>
                        <div className='sign-logo'>
                            <div className='sign-logo-pic'>
                                <Logo style={ logoStyle }/>
                            </div>
                        </div>
                        <div className='sign-container'>
                            <div className='sign-title'>Welcome back,<br/> sign in</div>
                            <div className='sign-form'>
                                <LoginForm submit={ this.onSubmit }/>
                            </div>
                            <div className='sign-account'>
                                Don't have an account? <Link to={ '/authentication/register' }>Sing up</Link>
                            </div>
                        </div>
                    </div>
                    <div className='sign-columns'>
                        <figure className='sign-picture'>
                            <img src={ SignBG } alt='sing picture'/>
                        </figure>
                    </div>
                </div>
            </Fragment>
        )
    }
}

LoginPage.propTypes = {
    onLogIn: propTypes.func
};

export default LoginPage;
