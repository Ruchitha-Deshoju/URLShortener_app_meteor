import React, { Component } from 'react';
import Accounts from './accounts';
import { Link } from 'react-router-dom';

class Header extends Component {  
onBinClick(event ) {
    event.preventDefault(); // It prevents the browser from navigating when the user clicks
    Meteor.call('bins.insert');
}

    render() {
        return (
            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Markbin</Link>
                </div >
                <ul className="nav navbar-nav">
                    <li>
                        <Accounts />
                    </li>
                    <li>
                        <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;