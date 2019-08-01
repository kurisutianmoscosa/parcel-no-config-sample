import React from 'react';


export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand">
                <div className="container">
                    <div className="navbar-header">
                        <div className="nav navbar-nav">
                            <li>
                                <a href="#">Home</a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
};