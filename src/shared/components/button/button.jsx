import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const Button = ({value, type}) => (
    <button className={'btn'}
        type={type}
    >{value}</button>
);

Button.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
};

Button.defaultProps = {
    value: '',
    type: '',
};

export default Button;
