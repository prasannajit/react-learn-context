import React, {Component} from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class App extends Component {
    constructor(){
        super();
        this.state = {
            language:'english'
        }
    }
    onLangagueChange = (lang)=>{
        this.setState({language:lang});
    }
    render(){
        return<div className="ui container">
            Select a language:
            <i className="flag us" onClick={()=>{this.onLangagueChange('english')}}></i>
            <i className="flag nl" onClick={()=>{this.onLangagueChange('dutch')}}></i>
            <LanguageContext.Provider value={this.state.language}>
                <ColorContext.Provider value="red">
                    <div><UserCreate/></div>
                </ColorContext.Provider>
            </LanguageContext.Provider>
            
        </div>
    }
}

export default App;