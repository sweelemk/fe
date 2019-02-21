import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import validator from 'validator';
import Input from '../../../../../shared/components/input';
import Button from '../../../../../shared/components/button/button';

import '../forms.scss';

export default class LoginForm extends PureComponent {
    static defaultProps = {
        submit: () => {
        }
    };

    static propTypes = {
        submit: PropTypes.func.isRequired
    };

    state = {
        data: {
            email: '',
            password: ''
        },
        errors: {}
    };

    onInputChange = ({ target: { name, value } }) => {
        this.setState({
            data: {
                ...this.state.data,
                [name]: value
            }
        })
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length === 0) this.props.submit(this.state.data);
    };

    validate = data => {
        const errors = {};
        if ( !validator.isEmail(data.email) ) errors.invalidEmail = true;
        if ( !data.password ) errors.invalidPassword = true;
        return errors;
    };

    render() {
        const { data: { email, password }, errors: { invalidEmail, invalidPassword } } = this.state;
        return (
            <form onSubmit={ this.onSubmitForm }>
                <div className={classNames(
                    'form-field',
                    {
                        'form-field__invalid': invalidEmail
                    }
                )}>
                    <Input name={ 'email' } placeholder={ 'Email' } value={ email } onChange={ this.onInputChange }/>
                </div>
                <div className={classNames(
                    'form-field',
                    {
                        'form-field__invalid': invalidPassword
                    }
                )}>
                    <Input name='password' placeholder='Password' value={ password } onChange={ this.onInputChange }
                           type='password'/>
                </div>
                <div className='form-field form-field__right'>
                    <Link to={ '/authentication/register' }>Forgot your password?</Link>
                </div>
                <div className='form-field'>
                    <Button type={ 'Submit' } value={ 'Sign in' }/>
                </div>
            </form>
        )
    }
};
