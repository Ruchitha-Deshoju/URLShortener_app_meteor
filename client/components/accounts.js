import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
    componentDidMount() {  // this is automatically called when the component is rendered to the screen
        // Render the Blaze accounts from then find the div 
        // we just rendered in the 'render' method and place
        // the Blaze accounts form in that div

        this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
    }

    componentWillUnmount() { // this is automaticalled when the omponent is about to get removed
        // Go find the forms we created and destroy them 
        // We need to clean up those forms ourselves
        Blaze.remove(this.view);
    }

    render() {
        return (
            <div ref="container"></div>
        )
    }
}

export default Accounts;