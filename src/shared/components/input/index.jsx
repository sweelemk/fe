import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const Input = ({value, onChange, onKeyPress, placeholder, name, type}) => (
    <div className='input-container'>
        <input
            className={classNames('input-element', {
                'input-active': value.length > 0,
            })}
            onChange={onChange}
            onKeyPress={onKeyPress}
            value={value}
            name={name}
            autoComplete={'off'}
            type={type}
        />
        <label className='input-label'>{placeholder}</label>
        <span className='input-border' />
    </div>
);

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string
};

Input.defaultProps = {
    value: '',
    onChange: () => {},
    onKeyPress: () => {},
    placeholder: '',
    name: '',
    type: ''
};

export default Input;
