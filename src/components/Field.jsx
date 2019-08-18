import React from 'react';
import LangaugeContext from '../context/LanguageContext';

class Field extends React.Component {
    render() {
        const text = this.context === 'english'?'name':'naam';
        return (<div className="ui field">
            <label>{text}</label>
            <input type="text"></input>
        </div>)
    }
}
Field.contextType = LangaugeContext;

export default Field;