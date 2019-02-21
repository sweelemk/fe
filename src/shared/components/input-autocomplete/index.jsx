import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import { defaultSelectStyle} from 'main/constants/page-constants';
// import ReactTags from 'react-tag-autocomplete';
import './index.scss';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

export default class AutoSuggest extends PureComponent {
    static defaultProps = {
        placeholder: ''
    };

    static propTypes = {
        placeholder: PropTypes.string,
    };

    state = {
        selectedOption: [],
    };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };

    render() {
        const { placeholder } = this.props;
        const { selectedOption } = this.state;
        console.log(selectedOption);
        return (
            <Fragment>
                <div className={ classNames(
                    'react-tags-container', {
                        'isNotEmpty': !!selectedOption
                    }
                ) }>
                    <Select
                        placeholder = { placeholder }
                        value={ selectedOption }
                        onChange={ this.handleChange }
                        options={ options }
                        className={classNames(
                            'react-select-container', {
                                'react-select-container__is-not-empty': selectedOption.length
                            }
                        )}
                        classNamePrefix='react-select'
                        isMulti
                        styles={ defaultSelectStyle }
                    />
                </div>
            </Fragment>
        )
    }
}
