import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export class Radio extends Component {
    onChange = () => {
        const { onChange } = this.context.radioGroup;
        onChange(this.props.value);
    };

    render() {
        const { name, selectedValue } = this.context.radioGroup;
        const { id, label } = this.props;

        return (
            <div className='radio-item'>
                <input
                    {...this.props}
                    role="radio"
                    aria-checked={this.props.value === selectedValue}
                    type="radio"
                    name={name}
                    checked={this.props.value === selectedValue}
                    onChange={this.onChange}
                />
                <label htmlFor={id}>{label}</label>
            </div>
        );
    }
}

Radio.contextTypes = {
    radioGroup: PropTypes.object
};

export class RadioGroup extends Component {
    getChildContext() {
        const {name, selectedValue, onChange} = this.props;
        return {
            radioGroup: {
                name, selectedValue, onChange
            }
        }
    }

    render() {
        const {Component, name, selectedValue, onChange, children, ...rest} = this.props;
        return <Component className='radio-group' role="radiogroup" {...rest}>{children}</Component>;
    }
}

RadioGroup.defaultProps = {
    Component: "div"
};

RadioGroup.propTypes = {
    name: PropTypes.string,
    selectedValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    onChange: PropTypes.func,
    children: PropTypes.node.isRequired,
    Component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.object,
    ])
};

RadioGroup.childContextTypes = {
    radioGroup: PropTypes.object
};
