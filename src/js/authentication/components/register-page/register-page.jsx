import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from 'authentication/components/forms/register-form/register-form';
import { Logo } from '../../../../icons/logo';
import SignBG from '../../../../img/sign-bg.jpg';
import { logoStyle} from 'main/constants/page-constants';

import '../sign.scss';


class RegisterPage extends PureComponent {
    onSubmit = (data) => {
        console.log(data);
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
                            <div className='sign-title'>Get started</div>
                            <div className='sign-subtitle'>Tell us more about you so that we can optimize
                                your experience.
                            </div>
                            <div className='sign-form'>
                                <RegisterForm submit={this.onSubmit}/>
                            </div>
                            <div className='sign-account'>
                                Have an account? <Link to={ '/authentication/login' }>Sing in</Link>
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

RegisterPage.propTypes = {};

export default RegisterPage;
