import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {
    //static contextType=LanguageContext;
    render() {
        //const text = this.context === 'english'? 'submit': 'voorleggen';
        //console.log(this.context);
        return (
            <ColorContext.Consumer>
                {(value) =>
                    (<button className={`ui button ${value}`}>
                        <LanguageContext.Consumer>
                            {value => value === "english" ? "submit" : "voorleggen"}
                        </LanguageContext.Consumer>
                    </button>)
                }
            </ColorContext.Consumer>)
    }
}
// Same as adding static property
//Button.contextType = LanguageContext;
export default Button;