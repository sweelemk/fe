import React, { Component, Fragment } from 'react';

import Inputs from '../../../../shared/components/input';
import Button from '../../../../shared/components/button/button';
import { Logo } from '../../../../icons/logo';
import { logoStyle } from 'main/constants/page-constants';

import { RadioGroup, Radio } from '../../../../shared/components/radio-button/radio-group';
import AutoSuggest from '../../../../shared/components/input-autocomplete';
import { Languages } from 'main/constants/page-constants';

import './guide-page.scss';

class GuidePage extends Component {
    state = {
        textInput: '',
        selectedValue: '1'
    };

    onInputChange = ({ target: { value } }) => {
        this.setState({
            textInput: value
        })
    };

    onRadioHandleChange = (value) => {
        this.setState({
            selectedValue: value
        });
    };

    render() {

        const { textInput, selectedValue } = this.state;
        return (
            <Fragment>
                <h1>Guide page</h1>
                <div className='guide-grid'>
                    <div className='guide-item'>
                        <div className='guide-title'>inputs</div>
                        <div className='guide-example'>
                            <Inputs placeholder={ 'First name' } value={ textInput } onChange={ this.onInputChange }/>
                        </div>
                    </div>
                    <div className='guide-item'>
                        <div className='guide-title'>Buttons</div>
                        <div className='guide-example'>
                            <Button type={ 'submit' } value={ 'Sign In' }/>
                        </div>
                    </div>
                    <div className='guide-item'>
                        <div className='guide-title'>Logo</div>
                        <div className='guide-example'>
                            <Logo style={ logoStyle }/>
                        </div>
                    </div>
                    <div className='guide-item'>
                        <div className='guide-title'>Radio Button</div>
                        <div className='guide-example'>
                            <RadioGroup
                                selectedValue={ selectedValue }
                                onChange={ this.onRadioHandleChange }
                                name='who-are-you'
                            >
                                <Radio value='teacher' id='1' label='Teacher'/>
                                <Radio value='student' id='2' label='Student'/>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className='guide-item'>
                        <div className='guide-title'>Auto suggest</div>
                        <div className='guide-example'>
                            <AutoSuggest placeholder = 'Choose language' optionList={Languages}/>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
}

export default GuidePage;
