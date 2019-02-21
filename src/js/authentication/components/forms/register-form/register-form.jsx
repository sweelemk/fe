import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import validator from 'validator';

import '../forms.scss';

import Input from '../../../../../shared/components/input';
import Button from '../../../../../shared/components/button/button';
import { RadioGroup, Radio } from '../../../../../shared/components/radio-button/radio-group';
import { userTypes } from '../../../constants/auth-constants';

export default class RegisterForm extends PureComponent {

    static defaultProps = {
        submit: () => {
        }
    };

    static propTypes = {
        submit: PropTypes.func.isRequired
    };

    state = {
        data: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            userType: '1',
            languages: []
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

    onRadioChange = (value) => {
        this.setState({
            data: {
                ...this.state.data,
                userType: value
            }
        });
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if ( Object.keys(errors).length === 0 ) this.props.submit(this.state.data);
    };

    validate = data => {
        const errors = {};
        if ( !data.firstName ) errors.invalidFirstName = true;
        if ( !data.lastName ) errors.invalidLastName = true;
        if ( !validator.isEmail(data.email) ) errors.invalidEmail = true;
        if ( !data.password ) errors.invalidPassword = true;
        return errors;
    };

    render() {
        const {
            data: { firstName, lastName, email, password, userType, languages },
            errors: { invalidFirstName, invalidLastName, invalidEmail, invalidPassword }
        } = this.state;
        return (
            <form onSubmit={ this.onSubmitForm }>
                <div className='form-field__column'>
                    <div className={ classNames(
                        'form-field',
                        {
                            'form-field__invalid': invalidFirstName
                        }
                    ) }>
                        <Input name={ 'firstName' } placeholder={ 'First Name' } value={ firstName }
                               onChange={ this.onInputChange }/>
                    </div>
                    <div className={ classNames(
                        'form-field',
                        {
                            'form-field__invalid': invalidLastName
                        }
                    ) }>
                        <Input name={ 'lastName' } placeholder={ 'Last Name' } value={ lastName }
                               onChange={ this.onInputChange }/>
                    </div>
                </div>
                <div className={ classNames(
                    'form-field',
                    {
                        'form-field__invalid': invalidEmail
                    }
                ) }>
                    <Input name={ 'email' } placeholder={ 'Email' } value={ email } onChange={ this.onInputChange }/>
                </div>
                <div className={ classNames(
                    'form-field',
                    {
                        'form-field__invalid': invalidPassword
                    }
                ) }>
                    <Input name='password' placeholder='Password' value={ password } onChange={ this.onInputChange }
                           type='password'/>
                </div>
                <div className='form-field'>
                    <RadioGroup
                        selectedValue={ userType }
                        onChange={ this.onRadioChange }
                        name='who-are-you'
                    >
                        {
                            userTypes.map(radioItem => (
                                <Radio key={ radioItem.value } value={ radioItem.value } id={ radioItem.value }
                                       label={ radioItem.name }/>
                            ))
                        }
                    </RadioGroup>
                </div>
                <div className='form-field'>
                    <Button type={ 'Submit' } value={ 'Sign up' }/>
                </div>
            </form>
        )
    }
};
