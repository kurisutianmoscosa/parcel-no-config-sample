import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
    }

    onMakeOlder() {
       this.setState({
            age: this.state.age += 3
       });
    };

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }; 

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    };
    
    render() {
        return (
            <div>
                <p>Hello {this.props.name}, your age is {this.state.age}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input 
                    type="text" 
                    value={this.state.homeLink} 
                    onChange={(event) => this.onHandleChange(event)}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Link!</button>
            </div>
        ); 
    }
}

Home.propTypes  = {
    name: PropTypes.string,
    age: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string,
};
